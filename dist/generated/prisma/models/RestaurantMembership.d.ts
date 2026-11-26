import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model RestaurantMembership
 *
 */
export type RestaurantMembershipModel = runtime.Types.Result.DefaultSelection<Prisma.$RestaurantMembershipPayload>;
export type AggregateRestaurantMembership = {
    _count: RestaurantMembershipCountAggregateOutputType | null;
    _min: RestaurantMembershipMinAggregateOutputType | null;
    _max: RestaurantMembershipMaxAggregateOutputType | null;
};
export type RestaurantMembershipMinAggregateOutputType = {
    id: string | null;
    restaurantId: string | null;
    userId: string | null;
    role: $Enums.RestaurantRole | null;
    status: $Enums.MembershipStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RestaurantMembershipMaxAggregateOutputType = {
    id: string | null;
    restaurantId: string | null;
    userId: string | null;
    role: $Enums.RestaurantRole | null;
    status: $Enums.MembershipStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RestaurantMembershipCountAggregateOutputType = {
    id: number;
    restaurantId: number;
    userId: number;
    role: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RestaurantMembershipMinAggregateInputType = {
    id?: true;
    restaurantId?: true;
    userId?: true;
    role?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RestaurantMembershipMaxAggregateInputType = {
    id?: true;
    restaurantId?: true;
    userId?: true;
    role?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RestaurantMembershipCountAggregateInputType = {
    id?: true;
    restaurantId?: true;
    userId?: true;
    role?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RestaurantMembershipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantMembership to aggregate.
     */
    where?: Prisma.RestaurantMembershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RestaurantMemberships to fetch.
     */
    orderBy?: Prisma.RestaurantMembershipOrderByWithRelationInput | Prisma.RestaurantMembershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RestaurantMembershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RestaurantMemberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RestaurantMemberships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RestaurantMemberships
    **/
    _count?: true | RestaurantMembershipCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMembershipMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMembershipMaxAggregateInputType;
};
export type GetRestaurantMembershipAggregateType<T extends RestaurantMembershipAggregateArgs> = {
    [P in keyof T & keyof AggregateRestaurantMembership]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRestaurantMembership[P]> : Prisma.GetScalarType<T[P], AggregateRestaurantMembership[P]>;
};
export type RestaurantMembershipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RestaurantMembershipWhereInput;
    orderBy?: Prisma.RestaurantMembershipOrderByWithAggregationInput | Prisma.RestaurantMembershipOrderByWithAggregationInput[];
    by: Prisma.RestaurantMembershipScalarFieldEnum[] | Prisma.RestaurantMembershipScalarFieldEnum;
    having?: Prisma.RestaurantMembershipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RestaurantMembershipCountAggregateInputType | true;
    _min?: RestaurantMembershipMinAggregateInputType;
    _max?: RestaurantMembershipMaxAggregateInputType;
};
export type RestaurantMembershipGroupByOutputType = {
    id: string;
    restaurantId: string;
    userId: string;
    role: $Enums.RestaurantRole;
    status: $Enums.MembershipStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: RestaurantMembershipCountAggregateOutputType | null;
    _min: RestaurantMembershipMinAggregateOutputType | null;
    _max: RestaurantMembershipMaxAggregateOutputType | null;
};
export type GetRestaurantMembershipGroupByPayload<T extends RestaurantMembershipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RestaurantMembershipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RestaurantMembershipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RestaurantMembershipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RestaurantMembershipGroupByOutputType[P]>;
}>>;
export type RestaurantMembershipWhereInput = {
    AND?: Prisma.RestaurantMembershipWhereInput | Prisma.RestaurantMembershipWhereInput[];
    OR?: Prisma.RestaurantMembershipWhereInput[];
    NOT?: Prisma.RestaurantMembershipWhereInput | Prisma.RestaurantMembershipWhereInput[];
    id?: Prisma.StringFilter<"RestaurantMembership"> | string;
    restaurantId?: Prisma.StringFilter<"RestaurantMembership"> | string;
    userId?: Prisma.StringFilter<"RestaurantMembership"> | string;
    role?: Prisma.EnumRestaurantRoleFilter<"RestaurantMembership"> | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFilter<"RestaurantMembership"> | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFilter<"RestaurantMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RestaurantMembership"> | Date | string;
    restaurant?: Prisma.XOR<Prisma.RestaurantScalarRelationFilter, Prisma.RestaurantWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type RestaurantMembershipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    restaurant?: Prisma.RestaurantOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type RestaurantMembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    restaurantId_userId?: Prisma.RestaurantMembershipRestaurantIdUserIdCompoundUniqueInput;
    AND?: Prisma.RestaurantMembershipWhereInput | Prisma.RestaurantMembershipWhereInput[];
    OR?: Prisma.RestaurantMembershipWhereInput[];
    NOT?: Prisma.RestaurantMembershipWhereInput | Prisma.RestaurantMembershipWhereInput[];
    restaurantId?: Prisma.StringFilter<"RestaurantMembership"> | string;
    userId?: Prisma.StringFilter<"RestaurantMembership"> | string;
    role?: Prisma.EnumRestaurantRoleFilter<"RestaurantMembership"> | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFilter<"RestaurantMembership"> | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFilter<"RestaurantMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RestaurantMembership"> | Date | string;
    restaurant?: Prisma.XOR<Prisma.RestaurantScalarRelationFilter, Prisma.RestaurantWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "restaurantId_userId">;
export type RestaurantMembershipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RestaurantMembershipCountOrderByAggregateInput;
    _max?: Prisma.RestaurantMembershipMaxOrderByAggregateInput;
    _min?: Prisma.RestaurantMembershipMinOrderByAggregateInput;
};
export type RestaurantMembershipScalarWhereWithAggregatesInput = {
    AND?: Prisma.RestaurantMembershipScalarWhereWithAggregatesInput | Prisma.RestaurantMembershipScalarWhereWithAggregatesInput[];
    OR?: Prisma.RestaurantMembershipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RestaurantMembershipScalarWhereWithAggregatesInput | Prisma.RestaurantMembershipScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RestaurantMembership"> | string;
    restaurantId?: Prisma.StringWithAggregatesFilter<"RestaurantMembership"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"RestaurantMembership"> | string;
    role?: Prisma.EnumRestaurantRoleWithAggregatesFilter<"RestaurantMembership"> | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusWithAggregatesFilter<"RestaurantMembership"> | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RestaurantMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RestaurantMembership"> | Date | string;
};
export type RestaurantMembershipCreateInput = {
    id?: string;
    role: $Enums.RestaurantRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutMembershipsInput;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
};
export type RestaurantMembershipUncheckedCreateInput = {
    id?: string;
    restaurantId: string;
    userId: string;
    role: $Enums.RestaurantRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RestaurantMembershipUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRestaurantRoleFieldUpdateOperationsInput | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutMembershipsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type RestaurantMembershipUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRestaurantRoleFieldUpdateOperationsInput | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RestaurantMembershipCreateManyInput = {
    id?: string;
    restaurantId: string;
    userId: string;
    role: $Enums.RestaurantRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RestaurantMembershipUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRestaurantRoleFieldUpdateOperationsInput | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RestaurantMembershipUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRestaurantRoleFieldUpdateOperationsInput | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RestaurantMembershipListRelationFilter = {
    every?: Prisma.RestaurantMembershipWhereInput;
    some?: Prisma.RestaurantMembershipWhereInput;
    none?: Prisma.RestaurantMembershipWhereInput;
};
export type RestaurantMembershipOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RestaurantMembershipRestaurantIdUserIdCompoundUniqueInput = {
    restaurantId: string;
    userId: string;
};
export type RestaurantMembershipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RestaurantMembershipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RestaurantMembershipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RestaurantMembershipCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutUserInput, Prisma.RestaurantMembershipUncheckedCreateWithoutUserInput> | Prisma.RestaurantMembershipCreateWithoutUserInput[] | Prisma.RestaurantMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RestaurantMembershipCreateOrConnectWithoutUserInput | Prisma.RestaurantMembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RestaurantMembershipCreateManyUserInputEnvelope;
    connect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
};
export type RestaurantMembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutUserInput, Prisma.RestaurantMembershipUncheckedCreateWithoutUserInput> | Prisma.RestaurantMembershipCreateWithoutUserInput[] | Prisma.RestaurantMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RestaurantMembershipCreateOrConnectWithoutUserInput | Prisma.RestaurantMembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RestaurantMembershipCreateManyUserInputEnvelope;
    connect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
};
export type RestaurantMembershipUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutUserInput, Prisma.RestaurantMembershipUncheckedCreateWithoutUserInput> | Prisma.RestaurantMembershipCreateWithoutUserInput[] | Prisma.RestaurantMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RestaurantMembershipCreateOrConnectWithoutUserInput | Prisma.RestaurantMembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RestaurantMembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.RestaurantMembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RestaurantMembershipCreateManyUserInputEnvelope;
    set?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    disconnect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    delete?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    connect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    update?: Prisma.RestaurantMembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.RestaurantMembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RestaurantMembershipUpdateManyWithWhereWithoutUserInput | Prisma.RestaurantMembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RestaurantMembershipScalarWhereInput | Prisma.RestaurantMembershipScalarWhereInput[];
};
export type RestaurantMembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutUserInput, Prisma.RestaurantMembershipUncheckedCreateWithoutUserInput> | Prisma.RestaurantMembershipCreateWithoutUserInput[] | Prisma.RestaurantMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RestaurantMembershipCreateOrConnectWithoutUserInput | Prisma.RestaurantMembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RestaurantMembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.RestaurantMembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RestaurantMembershipCreateManyUserInputEnvelope;
    set?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    disconnect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    delete?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    connect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    update?: Prisma.RestaurantMembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.RestaurantMembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RestaurantMembershipUpdateManyWithWhereWithoutUserInput | Prisma.RestaurantMembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RestaurantMembershipScalarWhereInput | Prisma.RestaurantMembershipScalarWhereInput[];
};
export type RestaurantMembershipCreateNestedManyWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutRestaurantInput, Prisma.RestaurantMembershipUncheckedCreateWithoutRestaurantInput> | Prisma.RestaurantMembershipCreateWithoutRestaurantInput[] | Prisma.RestaurantMembershipUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.RestaurantMembershipCreateOrConnectWithoutRestaurantInput | Prisma.RestaurantMembershipCreateOrConnectWithoutRestaurantInput[];
    createMany?: Prisma.RestaurantMembershipCreateManyRestaurantInputEnvelope;
    connect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
};
export type RestaurantMembershipUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutRestaurantInput, Prisma.RestaurantMembershipUncheckedCreateWithoutRestaurantInput> | Prisma.RestaurantMembershipCreateWithoutRestaurantInput[] | Prisma.RestaurantMembershipUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.RestaurantMembershipCreateOrConnectWithoutRestaurantInput | Prisma.RestaurantMembershipCreateOrConnectWithoutRestaurantInput[];
    createMany?: Prisma.RestaurantMembershipCreateManyRestaurantInputEnvelope;
    connect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
};
export type RestaurantMembershipUpdateManyWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutRestaurantInput, Prisma.RestaurantMembershipUncheckedCreateWithoutRestaurantInput> | Prisma.RestaurantMembershipCreateWithoutRestaurantInput[] | Prisma.RestaurantMembershipUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.RestaurantMembershipCreateOrConnectWithoutRestaurantInput | Prisma.RestaurantMembershipCreateOrConnectWithoutRestaurantInput[];
    upsert?: Prisma.RestaurantMembershipUpsertWithWhereUniqueWithoutRestaurantInput | Prisma.RestaurantMembershipUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: Prisma.RestaurantMembershipCreateManyRestaurantInputEnvelope;
    set?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    disconnect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    delete?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    connect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    update?: Prisma.RestaurantMembershipUpdateWithWhereUniqueWithoutRestaurantInput | Prisma.RestaurantMembershipUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: Prisma.RestaurantMembershipUpdateManyWithWhereWithoutRestaurantInput | Prisma.RestaurantMembershipUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: Prisma.RestaurantMembershipScalarWhereInput | Prisma.RestaurantMembershipScalarWhereInput[];
};
export type RestaurantMembershipUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutRestaurantInput, Prisma.RestaurantMembershipUncheckedCreateWithoutRestaurantInput> | Prisma.RestaurantMembershipCreateWithoutRestaurantInput[] | Prisma.RestaurantMembershipUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.RestaurantMembershipCreateOrConnectWithoutRestaurantInput | Prisma.RestaurantMembershipCreateOrConnectWithoutRestaurantInput[];
    upsert?: Prisma.RestaurantMembershipUpsertWithWhereUniqueWithoutRestaurantInput | Prisma.RestaurantMembershipUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: Prisma.RestaurantMembershipCreateManyRestaurantInputEnvelope;
    set?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    disconnect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    delete?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    connect?: Prisma.RestaurantMembershipWhereUniqueInput | Prisma.RestaurantMembershipWhereUniqueInput[];
    update?: Prisma.RestaurantMembershipUpdateWithWhereUniqueWithoutRestaurantInput | Prisma.RestaurantMembershipUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: Prisma.RestaurantMembershipUpdateManyWithWhereWithoutRestaurantInput | Prisma.RestaurantMembershipUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: Prisma.RestaurantMembershipScalarWhereInput | Prisma.RestaurantMembershipScalarWhereInput[];
};
export type EnumRestaurantRoleFieldUpdateOperationsInput = {
    set?: $Enums.RestaurantRole;
};
export type EnumMembershipStatusFieldUpdateOperationsInput = {
    set?: $Enums.MembershipStatus;
};
export type RestaurantMembershipCreateWithoutUserInput = {
    id?: string;
    role: $Enums.RestaurantRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutMembershipsInput;
};
export type RestaurantMembershipUncheckedCreateWithoutUserInput = {
    id?: string;
    restaurantId: string;
    role: $Enums.RestaurantRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RestaurantMembershipCreateOrConnectWithoutUserInput = {
    where: Prisma.RestaurantMembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutUserInput, Prisma.RestaurantMembershipUncheckedCreateWithoutUserInput>;
};
export type RestaurantMembershipCreateManyUserInputEnvelope = {
    data: Prisma.RestaurantMembershipCreateManyUserInput | Prisma.RestaurantMembershipCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RestaurantMembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RestaurantMembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.RestaurantMembershipUpdateWithoutUserInput, Prisma.RestaurantMembershipUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutUserInput, Prisma.RestaurantMembershipUncheckedCreateWithoutUserInput>;
};
export type RestaurantMembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RestaurantMembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.RestaurantMembershipUpdateWithoutUserInput, Prisma.RestaurantMembershipUncheckedUpdateWithoutUserInput>;
};
export type RestaurantMembershipUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RestaurantMembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.RestaurantMembershipUpdateManyMutationInput, Prisma.RestaurantMembershipUncheckedUpdateManyWithoutUserInput>;
};
export type RestaurantMembershipScalarWhereInput = {
    AND?: Prisma.RestaurantMembershipScalarWhereInput | Prisma.RestaurantMembershipScalarWhereInput[];
    OR?: Prisma.RestaurantMembershipScalarWhereInput[];
    NOT?: Prisma.RestaurantMembershipScalarWhereInput | Prisma.RestaurantMembershipScalarWhereInput[];
    id?: Prisma.StringFilter<"RestaurantMembership"> | string;
    restaurantId?: Prisma.StringFilter<"RestaurantMembership"> | string;
    userId?: Prisma.StringFilter<"RestaurantMembership"> | string;
    role?: Prisma.EnumRestaurantRoleFilter<"RestaurantMembership"> | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFilter<"RestaurantMembership"> | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFilter<"RestaurantMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RestaurantMembership"> | Date | string;
};
export type RestaurantMembershipCreateWithoutRestaurantInput = {
    id?: string;
    role: $Enums.RestaurantRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
};
export type RestaurantMembershipUncheckedCreateWithoutRestaurantInput = {
    id?: string;
    userId: string;
    role: $Enums.RestaurantRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RestaurantMembershipCreateOrConnectWithoutRestaurantInput = {
    where: Prisma.RestaurantMembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutRestaurantInput, Prisma.RestaurantMembershipUncheckedCreateWithoutRestaurantInput>;
};
export type RestaurantMembershipCreateManyRestaurantInputEnvelope = {
    data: Prisma.RestaurantMembershipCreateManyRestaurantInput | Prisma.RestaurantMembershipCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
};
export type RestaurantMembershipUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: Prisma.RestaurantMembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.RestaurantMembershipUpdateWithoutRestaurantInput, Prisma.RestaurantMembershipUncheckedUpdateWithoutRestaurantInput>;
    create: Prisma.XOR<Prisma.RestaurantMembershipCreateWithoutRestaurantInput, Prisma.RestaurantMembershipUncheckedCreateWithoutRestaurantInput>;
};
export type RestaurantMembershipUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: Prisma.RestaurantMembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.RestaurantMembershipUpdateWithoutRestaurantInput, Prisma.RestaurantMembershipUncheckedUpdateWithoutRestaurantInput>;
};
export type RestaurantMembershipUpdateManyWithWhereWithoutRestaurantInput = {
    where: Prisma.RestaurantMembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.RestaurantMembershipUpdateManyMutationInput, Prisma.RestaurantMembershipUncheckedUpdateManyWithoutRestaurantInput>;
};
export type RestaurantMembershipCreateManyUserInput = {
    id?: string;
    restaurantId: string;
    role: $Enums.RestaurantRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RestaurantMembershipUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRestaurantRoleFieldUpdateOperationsInput | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type RestaurantMembershipUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRestaurantRoleFieldUpdateOperationsInput | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RestaurantMembershipUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRestaurantRoleFieldUpdateOperationsInput | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RestaurantMembershipCreateManyRestaurantInput = {
    id?: string;
    userId: string;
    role: $Enums.RestaurantRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RestaurantMembershipUpdateWithoutRestaurantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRestaurantRoleFieldUpdateOperationsInput | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type RestaurantMembershipUncheckedUpdateWithoutRestaurantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRestaurantRoleFieldUpdateOperationsInput | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RestaurantMembershipUncheckedUpdateManyWithoutRestaurantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRestaurantRoleFieldUpdateOperationsInput | $Enums.RestaurantRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RestaurantMembershipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    restaurantId?: boolean;
    userId?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["restaurantMembership"]>;
export type RestaurantMembershipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    restaurantId?: boolean;
    userId?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["restaurantMembership"]>;
export type RestaurantMembershipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    restaurantId?: boolean;
    userId?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["restaurantMembership"]>;
export type RestaurantMembershipSelectScalar = {
    id?: boolean;
    restaurantId?: boolean;
    userId?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RestaurantMembershipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "restaurantId" | "userId" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurantMembership"]>;
export type RestaurantMembershipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RestaurantMembershipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RestaurantMembershipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $RestaurantMembershipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RestaurantMembership";
    objects: {
        restaurant: Prisma.$RestaurantPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        restaurantId: string;
        userId: string;
        role: $Enums.RestaurantRole;
        status: $Enums.MembershipStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["restaurantMembership"]>;
    composites: {};
};
export type RestaurantMembershipGetPayload<S extends boolean | null | undefined | RestaurantMembershipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload, S>;
export type RestaurantMembershipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RestaurantMembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RestaurantMembershipCountAggregateInputType | true;
};
export interface RestaurantMembershipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RestaurantMembership'];
        meta: {
            name: 'RestaurantMembership';
        };
    };
    /**
     * Find zero or one RestaurantMembership that matches the filter.
     * @param {RestaurantMembershipFindUniqueArgs} args - Arguments to find a RestaurantMembership
     * @example
     * // Get one RestaurantMembership
     * const restaurantMembership = await prisma.restaurantMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantMembershipFindUniqueArgs>(args: Prisma.SelectSubset<T, RestaurantMembershipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RestaurantMembershipClient<runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RestaurantMembership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantMembershipFindUniqueOrThrowArgs} args - Arguments to find a RestaurantMembership
     * @example
     * // Get one RestaurantMembership
     * const restaurantMembership = await prisma.restaurantMembership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantMembershipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RestaurantMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RestaurantMembershipClient<runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RestaurantMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantMembershipFindFirstArgs} args - Arguments to find a RestaurantMembership
     * @example
     * // Get one RestaurantMembership
     * const restaurantMembership = await prisma.restaurantMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantMembershipFindFirstArgs>(args?: Prisma.SelectSubset<T, RestaurantMembershipFindFirstArgs<ExtArgs>>): Prisma.Prisma__RestaurantMembershipClient<runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RestaurantMembership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantMembershipFindFirstOrThrowArgs} args - Arguments to find a RestaurantMembership
     * @example
     * // Get one RestaurantMembership
     * const restaurantMembership = await prisma.restaurantMembership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantMembershipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RestaurantMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RestaurantMembershipClient<runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RestaurantMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantMembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestaurantMemberships
     * const restaurantMemberships = await prisma.restaurantMembership.findMany()
     *
     * // Get first 10 RestaurantMemberships
     * const restaurantMemberships = await prisma.restaurantMembership.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const restaurantMembershipWithIdOnly = await prisma.restaurantMembership.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RestaurantMembershipFindManyArgs>(args?: Prisma.SelectSubset<T, RestaurantMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RestaurantMembership.
     * @param {RestaurantMembershipCreateArgs} args - Arguments to create a RestaurantMembership.
     * @example
     * // Create one RestaurantMembership
     * const RestaurantMembership = await prisma.restaurantMembership.create({
     *   data: {
     *     // ... data to create a RestaurantMembership
     *   }
     * })
     *
     */
    create<T extends RestaurantMembershipCreateArgs>(args: Prisma.SelectSubset<T, RestaurantMembershipCreateArgs<ExtArgs>>): Prisma.Prisma__RestaurantMembershipClient<runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RestaurantMemberships.
     * @param {RestaurantMembershipCreateManyArgs} args - Arguments to create many RestaurantMemberships.
     * @example
     * // Create many RestaurantMemberships
     * const restaurantMembership = await prisma.restaurantMembership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RestaurantMembershipCreateManyArgs>(args?: Prisma.SelectSubset<T, RestaurantMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RestaurantMemberships and returns the data saved in the database.
     * @param {RestaurantMembershipCreateManyAndReturnArgs} args - Arguments to create many RestaurantMemberships.
     * @example
     * // Create many RestaurantMemberships
     * const restaurantMembership = await prisma.restaurantMembership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RestaurantMemberships and only return the `id`
     * const restaurantMembershipWithIdOnly = await prisma.restaurantMembership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RestaurantMembershipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RestaurantMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RestaurantMembership.
     * @param {RestaurantMembershipDeleteArgs} args - Arguments to delete one RestaurantMembership.
     * @example
     * // Delete one RestaurantMembership
     * const RestaurantMembership = await prisma.restaurantMembership.delete({
     *   where: {
     *     // ... filter to delete one RestaurantMembership
     *   }
     * })
     *
     */
    delete<T extends RestaurantMembershipDeleteArgs>(args: Prisma.SelectSubset<T, RestaurantMembershipDeleteArgs<ExtArgs>>): Prisma.Prisma__RestaurantMembershipClient<runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RestaurantMembership.
     * @param {RestaurantMembershipUpdateArgs} args - Arguments to update one RestaurantMembership.
     * @example
     * // Update one RestaurantMembership
     * const restaurantMembership = await prisma.restaurantMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RestaurantMembershipUpdateArgs>(args: Prisma.SelectSubset<T, RestaurantMembershipUpdateArgs<ExtArgs>>): Prisma.Prisma__RestaurantMembershipClient<runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RestaurantMemberships.
     * @param {RestaurantMembershipDeleteManyArgs} args - Arguments to filter RestaurantMemberships to delete.
     * @example
     * // Delete a few RestaurantMemberships
     * const { count } = await prisma.restaurantMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RestaurantMembershipDeleteManyArgs>(args?: Prisma.SelectSubset<T, RestaurantMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RestaurantMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestaurantMemberships
     * const restaurantMembership = await prisma.restaurantMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RestaurantMembershipUpdateManyArgs>(args: Prisma.SelectSubset<T, RestaurantMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RestaurantMemberships and returns the data updated in the database.
     * @param {RestaurantMembershipUpdateManyAndReturnArgs} args - Arguments to update many RestaurantMemberships.
     * @example
     * // Update many RestaurantMemberships
     * const restaurantMembership = await prisma.restaurantMembership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RestaurantMemberships and only return the `id`
     * const restaurantMembershipWithIdOnly = await prisma.restaurantMembership.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RestaurantMembershipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RestaurantMembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RestaurantMembership.
     * @param {RestaurantMembershipUpsertArgs} args - Arguments to update or create a RestaurantMembership.
     * @example
     * // Update or create a RestaurantMembership
     * const restaurantMembership = await prisma.restaurantMembership.upsert({
     *   create: {
     *     // ... data to create a RestaurantMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestaurantMembership we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantMembershipUpsertArgs>(args: Prisma.SelectSubset<T, RestaurantMembershipUpsertArgs<ExtArgs>>): Prisma.Prisma__RestaurantMembershipClient<runtime.Types.Result.GetResult<Prisma.$RestaurantMembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RestaurantMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantMembershipCountArgs} args - Arguments to filter RestaurantMemberships to count.
     * @example
     * // Count the number of RestaurantMemberships
     * const count = await prisma.restaurantMembership.count({
     *   where: {
     *     // ... the filter for the RestaurantMemberships we want to count
     *   }
     * })
    **/
    count<T extends RestaurantMembershipCountArgs>(args?: Prisma.Subset<T, RestaurantMembershipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RestaurantMembershipCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RestaurantMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantMembershipAggregateArgs>(args: Prisma.Subset<T, RestaurantMembershipAggregateArgs>): Prisma.PrismaPromise<GetRestaurantMembershipAggregateType<T>>;
    /**
     * Group by RestaurantMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantMembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends RestaurantMembershipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RestaurantMembershipGroupByArgs['orderBy'];
    } : {
        orderBy?: RestaurantMembershipGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RestaurantMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RestaurantMembership model
     */
    readonly fields: RestaurantMembershipFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RestaurantMembership.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RestaurantMembershipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    restaurant<T extends Prisma.RestaurantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RestaurantDefaultArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the RestaurantMembership model
 */
export interface RestaurantMembershipFieldRefs {
    readonly id: Prisma.FieldRef<"RestaurantMembership", 'String'>;
    readonly restaurantId: Prisma.FieldRef<"RestaurantMembership", 'String'>;
    readonly userId: Prisma.FieldRef<"RestaurantMembership", 'String'>;
    readonly role: Prisma.FieldRef<"RestaurantMembership", 'RestaurantRole'>;
    readonly status: Prisma.FieldRef<"RestaurantMembership", 'MembershipStatus'>;
    readonly createdAt: Prisma.FieldRef<"RestaurantMembership", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RestaurantMembership", 'DateTime'>;
}
/**
 * RestaurantMembership findUnique
 */
export type RestaurantMembershipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipInclude<ExtArgs> | null;
    /**
     * Filter, which RestaurantMembership to fetch.
     */
    where: Prisma.RestaurantMembershipWhereUniqueInput;
};
/**
 * RestaurantMembership findUniqueOrThrow
 */
export type RestaurantMembershipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipInclude<ExtArgs> | null;
    /**
     * Filter, which RestaurantMembership to fetch.
     */
    where: Prisma.RestaurantMembershipWhereUniqueInput;
};
/**
 * RestaurantMembership findFirst
 */
export type RestaurantMembershipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipInclude<ExtArgs> | null;
    /**
     * Filter, which RestaurantMembership to fetch.
     */
    where?: Prisma.RestaurantMembershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RestaurantMemberships to fetch.
     */
    orderBy?: Prisma.RestaurantMembershipOrderByWithRelationInput | Prisma.RestaurantMembershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RestaurantMemberships.
     */
    cursor?: Prisma.RestaurantMembershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RestaurantMemberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RestaurantMemberships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RestaurantMemberships.
     */
    distinct?: Prisma.RestaurantMembershipScalarFieldEnum | Prisma.RestaurantMembershipScalarFieldEnum[];
};
/**
 * RestaurantMembership findFirstOrThrow
 */
export type RestaurantMembershipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipInclude<ExtArgs> | null;
    /**
     * Filter, which RestaurantMembership to fetch.
     */
    where?: Prisma.RestaurantMembershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RestaurantMemberships to fetch.
     */
    orderBy?: Prisma.RestaurantMembershipOrderByWithRelationInput | Prisma.RestaurantMembershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RestaurantMemberships.
     */
    cursor?: Prisma.RestaurantMembershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RestaurantMemberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RestaurantMemberships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RestaurantMemberships.
     */
    distinct?: Prisma.RestaurantMembershipScalarFieldEnum | Prisma.RestaurantMembershipScalarFieldEnum[];
};
/**
 * RestaurantMembership findMany
 */
export type RestaurantMembershipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipInclude<ExtArgs> | null;
    /**
     * Filter, which RestaurantMemberships to fetch.
     */
    where?: Prisma.RestaurantMembershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RestaurantMemberships to fetch.
     */
    orderBy?: Prisma.RestaurantMembershipOrderByWithRelationInput | Prisma.RestaurantMembershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RestaurantMemberships.
     */
    cursor?: Prisma.RestaurantMembershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RestaurantMemberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RestaurantMemberships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RestaurantMemberships.
     */
    distinct?: Prisma.RestaurantMembershipScalarFieldEnum | Prisma.RestaurantMembershipScalarFieldEnum[];
};
/**
 * RestaurantMembership create
 */
export type RestaurantMembershipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipInclude<ExtArgs> | null;
    /**
     * The data needed to create a RestaurantMembership.
     */
    data: Prisma.XOR<Prisma.RestaurantMembershipCreateInput, Prisma.RestaurantMembershipUncheckedCreateInput>;
};
/**
 * RestaurantMembership createMany
 */
export type RestaurantMembershipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestaurantMemberships.
     */
    data: Prisma.RestaurantMembershipCreateManyInput | Prisma.RestaurantMembershipCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RestaurantMembership createManyAndReturn
 */
export type RestaurantMembershipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * The data used to create many RestaurantMemberships.
     */
    data: Prisma.RestaurantMembershipCreateManyInput | Prisma.RestaurantMembershipCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * RestaurantMembership update
 */
export type RestaurantMembershipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipInclude<ExtArgs> | null;
    /**
     * The data needed to update a RestaurantMembership.
     */
    data: Prisma.XOR<Prisma.RestaurantMembershipUpdateInput, Prisma.RestaurantMembershipUncheckedUpdateInput>;
    /**
     * Choose, which RestaurantMembership to update.
     */
    where: Prisma.RestaurantMembershipWhereUniqueInput;
};
/**
 * RestaurantMembership updateMany
 */
export type RestaurantMembershipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RestaurantMemberships.
     */
    data: Prisma.XOR<Prisma.RestaurantMembershipUpdateManyMutationInput, Prisma.RestaurantMembershipUncheckedUpdateManyInput>;
    /**
     * Filter which RestaurantMemberships to update
     */
    where?: Prisma.RestaurantMembershipWhereInput;
    /**
     * Limit how many RestaurantMemberships to update.
     */
    limit?: number;
};
/**
 * RestaurantMembership updateManyAndReturn
 */
export type RestaurantMembershipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * The data used to update RestaurantMemberships.
     */
    data: Prisma.XOR<Prisma.RestaurantMembershipUpdateManyMutationInput, Prisma.RestaurantMembershipUncheckedUpdateManyInput>;
    /**
     * Filter which RestaurantMemberships to update
     */
    where?: Prisma.RestaurantMembershipWhereInput;
    /**
     * Limit how many RestaurantMemberships to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * RestaurantMembership upsert
 */
export type RestaurantMembershipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipInclude<ExtArgs> | null;
    /**
     * The filter to search for the RestaurantMembership to update in case it exists.
     */
    where: Prisma.RestaurantMembershipWhereUniqueInput;
    /**
     * In case the RestaurantMembership found by the `where` argument doesn't exist, create a new RestaurantMembership with this data.
     */
    create: Prisma.XOR<Prisma.RestaurantMembershipCreateInput, Prisma.RestaurantMembershipUncheckedCreateInput>;
    /**
     * In case the RestaurantMembership was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RestaurantMembershipUpdateInput, Prisma.RestaurantMembershipUncheckedUpdateInput>;
};
/**
 * RestaurantMembership delete
 */
export type RestaurantMembershipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipInclude<ExtArgs> | null;
    /**
     * Filter which RestaurantMembership to delete.
     */
    where: Prisma.RestaurantMembershipWhereUniqueInput;
};
/**
 * RestaurantMembership deleteMany
 */
export type RestaurantMembershipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantMemberships to delete
     */
    where?: Prisma.RestaurantMembershipWhereInput;
    /**
     * Limit how many RestaurantMemberships to delete.
     */
    limit?: number;
};
/**
 * RestaurantMembership without action
 */
export type RestaurantMembershipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantMembership
     */
    select?: Prisma.RestaurantMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RestaurantMembership
     */
    omit?: Prisma.RestaurantMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantMembershipInclude<ExtArgs> | null;
};
