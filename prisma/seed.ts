import {
    AddressLabel,
    MembershipStatus,
    RestaurantRole,
    RiderStatus,
    UserRole,
} from "../generated/prisma/enums.js";
import { prisma } from "../src/infrastructure/database/prisma.js";
import { hashPassword } from "../src/shared/utils/password.js";
async function seedUsers(): Promise<void> {
    const password = "FoodDelivery@123";
    const passwordHash = await hashPassword(password);

    const users = [
        {
            email: "admin@fooddelivery.local",
            firstName: "System",
            lastName: "Admin",
            phone: "+8801700000001",
            role: UserRole.ADMIN,
        },
        {
            email: "customer1@fooddelivery.local",
            firstName: "Rahim",
            lastName: "Ahmed",
            phone: "+8801700000002",
            role: UserRole.CUSTOMER,
        },
        {
            email: "customer2@fooddelivery.local",
            firstName: "Karim",
            lastName: "Hasan",
            phone: "+8801700000003",
            role: UserRole.CUSTOMER,
        },
        {
            email: "customer3@fooddelivery.local",
            firstName: "Sadia",
            lastName: "Akter",
            phone: "+8801700000004",
            role: UserRole.CUSTOMER,
        },
        {
            email: "owner1@fooddelivery.local",
            firstName: "Mohammad",
            lastName: "Hossain",
            phone: "+8801700000005",
            role: UserRole.CUSTOMER,
        },
        {
            email: "owner2@fooddelivery.local",
            firstName: "Abdullah",
            lastName: "Khan",
            phone: "+8801700000006",
            role: UserRole.CUSTOMER,
        },
        {
            email: "manager1@fooddelivery.local",
            firstName: "Nusrat",
            lastName: "Jahan",
            phone: "+8801700000007",
            role: UserRole.CUSTOMER,
        },
        {
            email: "rider1@fooddelivery.local",
            firstName: "Imran",
            lastName: "Ali",
            phone: "+8801700000008",
            role: UserRole.CUSTOMER,
        },
        {
            email: "rider2@fooddelivery.local",
            firstName: "Hasan",
            lastName: "Mahmud",
            phone: "+8801700000009",
            role: UserRole.CUSTOMER,
        },
    ];

    for (const user of users) {
        await prisma.user.upsert({
            where: {
                email: user.email,
            },
            update: {
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                passwordHash,
                role: user.role,
                isActive: true,
            },
            create: {
                ...user,
                passwordHash,
            },
        });
    }

    console.log(`Successfully seeded ${users.length} users.`);
}

async function seedRestaurants(): Promise<void> {
    const restaurants = [
        {
            name: "Dhaka Food House",
            slug: "dhaka-food-house",
            description: "Authentic Bangladeshi food and traditional meals.",
            phone: "+8801710000001",
            address: "Dhanmondi 27, Dhaka, Bangladesh",
            isActive: true,
        },
        {
            name: "Burger Factory",
            slug: "burger-factory",
            description: "Delicious burgers, fries, and fast food.",
            phone: "+8801710000002",
            address: "Banani 11, Dhaka, Bangladesh",
            isActive: true,
        },
    ];

    for (const restaurant of restaurants) {
        await prisma.restaurant.upsert({
            where: {
                slug: restaurant.slug,
            },
            update: {
                name: restaurant.name,
                description: restaurant.description,
                phone: restaurant.phone,
                address: restaurant.address,
                isActive: restaurant.isActive,
            },
            create: restaurant,
        });
    }

    console.log(`Successfully seeded ${restaurants.length} restaurants.`);
}

async function seedRestaurantMemberships(): Promise<void> {
    const memberships = [
        {
            userEmail: "owner1@fooddelivery.local",
            restaurantSlug: "dhaka-food-house",
            role: RestaurantRole.OWNER,
        },
        {
            userEmail: "owner2@fooddelivery.local",
            restaurantSlug: "burger-factory",
            role: RestaurantRole.OWNER,
        },
        {
            userEmail: "manager1@fooddelivery.local",
            restaurantSlug: "dhaka-food-house",
            role: RestaurantRole.MANAGER,
        },
    ];

    for (const membership of memberships) {
        const [user, restaurant] = await Promise.all([
            prisma.user.findUnique({
                where: {
                    email: membership.userEmail,
                },
                select: {
                    id: true,
                },
            }),

            prisma.restaurant.findUnique({
                where: {
                    slug: membership.restaurantSlug,
                },
                select: {
                    id: true,
                },
            }),
        ]);

        if (!user) {
            throw new Error(`User not found: ${membership.userEmail}`);
        }

        if (!restaurant) {
            throw new Error(`Restaurant not found: ${membership.restaurantSlug}`);
        }

        await prisma.restaurantMembership.upsert({
            where: {
                restaurantId_userId: {
                    restaurantId: restaurant.id,
                    userId: user.id,
                },
            },

            update: {
                role: membership.role,
                status: MembershipStatus.ACTIVE,
            },

            create: {
                restaurantId: restaurant.id,
                userId: user.id,
                role: membership.role,
                status: MembershipStatus.ACTIVE,
            },
        });
    }

    console.log(`Successfully seeded ${memberships.length} restaurant memberships.`);
}

async function seedAddresses(): Promise<void> {
    const addresses = [
        {
            id: "00000000-0000-4000-8000-000000000101",
            userEmail: "customer1@fooddelivery.local",
            label: AddressLabel.HOME,
            recipientName: "Rahim Ahmed",
            phone: "+8801700000002",
            addressLine: "House 12, Road 5, Dhanmondi",
            city: "Dhaka",
            postalCode: "1205",
            isDefault: true,
        },
        {
            id: "00000000-0000-4000-8000-000000000102",
            userEmail: "customer2@fooddelivery.local",
            label: AddressLabel.HOME,
            recipientName: "Karim Hasan",
            phone: "+8801700000003",
            addressLine: "House 24, Road 11, Banani",
            city: "Dhaka",
            postalCode: "1213",
            isDefault: true,
        },
        {
            id: "00000000-0000-4000-8000-000000000103",
            userEmail: "customer3@fooddelivery.local",
            label: AddressLabel.OFFICE,
            recipientName: "Sadia Akter",
            phone: "+8801700000004",
            addressLine: "House 8, Road 2, Uttara",
            city: "Dhaka",
            postalCode: "1230",
            isDefault: true,
        },
    ];

    for (const address of addresses) {
        const user = await prisma.user.findUnique({
            where: {
                email: address.userEmail,
            },
            select: {
                id: true,
            },
        });

        if (!user) {
            throw new Error(`User not found: ${address.userEmail}`);
        }

        const { ...addressData } = address;

        await prisma.address.upsert({
            where: {
                id: address.id,
            },

            update: {
                ...addressData,
                userId: user.id,
            },

            create: {
                ...addressData,
                userId: user.id,
            },
        });
    }

    console.log(`Successfully seeded ${addresses.length} addresses.`);
}

async function seedMenuCategories(): Promise<void> {
    const restaurantCategories = [
        {
            restaurantSlug: "dhaka-food-house",
            categories: [
                {
                    name: "Rice Meals",
                    description: "Traditional Bangladeshi rice dishes.",
                    sortOrder: 1,
                },
                {
                    name: "Snacks",
                    description: "Delicious snacks and appetizers.",
                    sortOrder: 2,
                },
                {
                    name: "Desserts",
                    description: "Sweet dishes and desserts.",
                    sortOrder: 3,
                },
                {
                    name: "Drinks",
                    description: "Cold and refreshing beverages.",
                    sortOrder: 4,
                },
                {
                    name: "Burgers",
                    description: "Freshly prepared burgers.",
                    sortOrder: 5,
                },
                {
                    name: "Pizza",
                    description: "Freshly baked pizzas.",
                    sortOrder: 6,
                },
            ],
        },
        {
            restaurantSlug: "burger-factory",
            categories: [
                {
                    name: "Burgers",
                    description: "Specialty burgers and combos.",
                    sortOrder: 1,
                },
                {
                    name: "Pizza",
                    description: "Freshly baked pizzas.",
                    sortOrder: 2,
                },
                {
                    name: "Snacks",
                    description: "Fries and other snacks.",
                    sortOrder: 3,
                },
                {
                    name: "Desserts",
                    description: "Delicious desserts.",
                    sortOrder: 4,
                },
                {
                    name: "Drinks",
                    description: "Cold drinks and beverages.",
                    sortOrder: 5,
                },
                {
                    name: "Rice Meals",
                    description: "Rice-based meals.",
                    sortOrder: 6,
                },
            ],
        },
    ];

    let totalCategories = 0;

    for (const restaurantData of restaurantCategories) {
        const restaurant = await prisma.restaurant.findUnique({
            where: {
                slug: restaurantData.restaurantSlug,
            },
            select: {
                id: true,
            },
        });

        if (!restaurant) {
            throw new Error(`Restaurant not found: ${restaurantData.restaurantSlug}`);
        }

        for (const category of restaurantData.categories) {
            await prisma.menuCategory.upsert({
                where: {
                    restaurantId_name: {
                        restaurantId: restaurant.id,
                        name: category.name,
                    },
                },

                update: {
                    description: category.description,
                    sortOrder: category.sortOrder,
                    isActive: true,
                },

                create: {
                    restaurantId: restaurant.id,
                    name: category.name,
                    description: category.description,
                    sortOrder: category.sortOrder,
                    isActive: true,
                },
            });

            totalCategories++;
        }
    }

    console.log(`Successfully seeded ${totalCategories} menu categories.`);
}

async function seedMenuItems(): Promise<void> {
    const menuItems = [
        // =====================================
        // DHAKA FOOD HOUSE
        // =====================================
        {
            id: "00000000-0000-4000-8000-000000000201",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Rice Meals",
            name: "Chicken Biryani",
            description: "Aromatic basmati rice with spicy chicken.",
            price: "250.00",
            sortOrder: 1,
        },
        {
            id: "00000000-0000-4000-8000-000000000202",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Rice Meals",
            name: "Beef Tehari",
            description: "Traditional Bangladeshi beef tehari.",
            price: "220.00",
            sortOrder: 2,
        },
        {
            id: "00000000-0000-4000-8000-000000000203",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Rice Meals",
            name: "Chicken Khichuri",
            description: "Traditional rice and lentil dish with chicken.",
            price: "180.00",
            sortOrder: 3,
        },
        {
            id: "00000000-0000-4000-8000-000000000204",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Snacks",
            name: "Chicken Samosa",
            description: "Crispy pastry filled with spicy chicken.",
            price: "40.00",
            sortOrder: 1,
        },
        {
            id: "00000000-0000-4000-8000-000000000205",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Snacks",
            name: "Chicken Roll",
            description: "Chicken-filled crispy roll.",
            price: "100.00",
            sortOrder: 2,
        },
        {
            id: "00000000-0000-4000-8000-000000000206",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Desserts",
            name: "Firni",
            description: "Traditional creamy rice pudding.",
            price: "80.00",
            sortOrder: 1,
        },
        {
            id: "00000000-0000-4000-8000-000000000207",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Desserts",
            name: "Sweet Yogurt",
            description: "Traditional sweetened yogurt.",
            price: "100.00",
            sortOrder: 2,
        },
        {
            id: "00000000-0000-4000-8000-000000000208",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Drinks",
            name: "Borhani",
            description: "Traditional spicy yogurt drink.",
            price: "60.00",
            sortOrder: 1,
        },
        {
            id: "00000000-0000-4000-8000-000000000209",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Drinks",
            name: "Fresh Lemon Juice",
            description: "Freshly prepared lemon juice.",
            price: "50.00",
            sortOrder: 2,
        },
        {
            id: "00000000-0000-4000-8000-000000000210",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Burgers",
            name: "Chicken Burger",
            description: "Chicken patty burger with fresh vegetables.",
            price: "180.00",
            sortOrder: 1,
        },
        {
            id: "00000000-0000-4000-8000-000000000211",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Pizza",
            name: "Chicken Pizza",
            description: "Chicken pizza topped with mozzarella cheese.",
            price: "450.00",
            sortOrder: 1,
        },
        {
            id: "00000000-0000-4000-8000-000000000212",
            restaurantSlug: "dhaka-food-house",
            categoryName: "Pizza",
            name: "Vegetable Pizza",
            description: "Pizza with fresh seasonal vegetables.",
            price: "380.00",
            sortOrder: 2,
        },

        // =====================================
        // BURGER FACTORY
        // =====================================
        {
            id: "00000000-0000-4000-8000-000000000213",
            restaurantSlug: "burger-factory",
            categoryName: "Burgers",
            name: "Classic Beef Burger",
            description: "Juicy beef patty with cheese and vegetables.",
            price: "280.00",
            sortOrder: 1,
        },
        {
            id: "00000000-0000-4000-8000-000000000214",
            restaurantSlug: "burger-factory",
            categoryName: "Burgers",
            name: "Double Cheese Burger",
            description: "Double beef patty with extra cheese.",
            price: "420.00",
            sortOrder: 2,
        },
        {
            id: "00000000-0000-4000-8000-000000000215",
            restaurantSlug: "burger-factory",
            categoryName: "Burgers",
            name: "Crispy Chicken Burger",
            description: "Crispy fried chicken with special sauce.",
            price: "250.00",
            sortOrder: 3,
        },
        {
            id: "00000000-0000-4000-8000-000000000216",
            restaurantSlug: "burger-factory",
            categoryName: "Pizza",
            name: "BBQ Chicken Pizza",
            description: "BBQ chicken pizza with mozzarella cheese.",
            price: "550.00",
            sortOrder: 1,
        },
        {
            id: "00000000-0000-4000-8000-000000000217",
            restaurantSlug: "burger-factory",
            categoryName: "Pizza",
            name: "Pepperoni Pizza",
            description: "Classic pepperoni pizza.",
            price: "600.00",
            sortOrder: 2,
        },
        {
            id: "00000000-0000-4000-8000-000000000218",
            restaurantSlug: "burger-factory",
            categoryName: "Snacks",
            name: "French Fries",
            description: "Golden crispy potato fries.",
            price: "120.00",
            sortOrder: 1,
        },
        {
            id: "00000000-0000-4000-8000-000000000219",
            restaurantSlug: "burger-factory",
            categoryName: "Snacks",
            name: "Chicken Nuggets",
            description: "Crispy chicken nuggets.",
            price: "180.00",
            sortOrder: 2,
        },
        {
            id: "00000000-0000-4000-8000-000000000220",
            restaurantSlug: "burger-factory",
            categoryName: "Desserts",
            name: "Chocolate Brownie",
            description: "Rich chocolate brownie.",
            price: "150.00",
            sortOrder: 1,
        },
        {
            id: "00000000-0000-4000-8000-000000000221",
            restaurantSlug: "burger-factory",
            categoryName: "Desserts",
            name: "Chocolate Ice Cream",
            description: "Creamy chocolate ice cream.",
            price: "120.00",
            sortOrder: 2,
        },
        {
            id: "00000000-0000-4000-8000-000000000222",
            restaurantSlug: "burger-factory",
            categoryName: "Drinks",
            name: "Cold Coffee",
            description: "Chilled coffee with milk.",
            price: "150.00",
            sortOrder: 1,
        },
        {
            id: "00000000-0000-4000-8000-000000000223",
            restaurantSlug: "burger-factory",
            categoryName: "Drinks",
            name: "Chocolate Milkshake",
            description: "Thick chocolate milkshake.",
            price: "180.00",
            sortOrder: 2,
        },
        {
            id: "00000000-0000-4000-8000-000000000224",
            restaurantSlug: "burger-factory",
            categoryName: "Rice Meals",
            name: "Chicken Fried Rice",
            description: "Fried rice served with chicken.",
            price: "220.00",
            sortOrder: 1,
        },
    ];

    for (const item of menuItems) {
        const restaurant = await prisma.restaurant.findUnique({
            where: {
                slug: item.restaurantSlug,
            },
            select: {
                id: true,
            },
        });

        if (!restaurant) {
            throw new Error(`Restaurant not found: ${item.restaurantSlug}`);
        }

        const category = await prisma.menuCategory.findUnique({
            where: {
                restaurantId_name: {
                    restaurantId: restaurant.id,
                    name: item.categoryName,
                },
            },
            select: {
                id: true,
            },
        });

        if (!category) {
            throw new Error(`Category not found: ${item.categoryName}`);
        }

        await prisma.menuItem.upsert({
            where: {
                id: item.id,
            },

            update: {
                restaurantId: restaurant.id,
                categoryId: category.id,
                name: item.name,
                description: item.description,
                price: item.price,
                isAvailable: true,
                sortOrder: item.sortOrder,
            },

            create: {
                id: item.id,
                restaurantId: restaurant.id,
                categoryId: category.id,
                name: item.name,
                description: item.description,
                price: item.price,
                isAvailable: true,
                sortOrder: item.sortOrder,
            },
        });
    }

    console.log(`Successfully seeded ${menuItems.length} menu items.`);
}

const seedRiders = async (): Promise<void> => {
    const riders = [
        {
            userEmail: "rider1@fooddelivery.local",
            status: RiderStatus.AVAILABLE,
        },
        {
            userEmail: "rider2@fooddelivery.local",
            status: RiderStatus.OFFLINE,
        },
    ];

    for (const riderData of riders) {
        const user = await prisma.user.findUnique({
            where: {
                email: riderData.userEmail,
            },
            select: {
                id: true,
            },
        });

        if (!user) {
            throw new Error(`Rider user not found: ${riderData.userEmail}`);
        }

        await prisma.rider.upsert({
            where: {
                userId: user.id,
            },
            update: {
                status: riderData.status,
                isActive: true,
            },
            create: {
                userId: user.id,
                status: riderData.status,
                isActive: true,
            },
        });
    }

    console.log("Riders seeded successfully.");
};

async function main(): Promise<void> {
    if (process.env.NODE_ENV === "production") {
        throw new Error("Development seed data cannot run in production.");
    }

    console.log("Starting database seeding...");

    await seedUsers();
    await seedRestaurants();
    await seedRestaurantMemberships();
    await seedAddresses();
    await seedMenuCategories();
    await seedMenuItems();
    await seedRiders();

    console.log("Database seeding completed.");
}

main()
    .catch((error: unknown) => {
        console.error("Database seeding failed:", error);
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
