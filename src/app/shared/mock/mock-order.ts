export const Orders = [
    {
        uuid : 'dd9d5ea5-5cfa-815c-90fb-20573fe06ead',
        id: 'PO-0000001',
        type: 1,
        status : 1,
        bankAccount: {
            uuid: '33d4991e-7344-4df6-b4bb-62228c9cdd57',
            name: 'ANZ Platinum',
            balance: 3890.22,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        payAmount: 100,
        orderProducts : [
            {
                quantity : 1,
                product : {
                    barcode : '111111',
                    sku : '000001',
                    price : 11.99,
                    model : '成人',
                    uuid : '9aa8d7ed-7182-6daf-9e47-2d3c35157d60',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '蔓越莓'
                },
                unitPrice : 11.99,
                note : '',
                uuid : '2eff149b-2c76-5f8a-e602-debad86fe09f'
            },
            {
                quantity : 1,
                product : {
                    barcode : '333333',
                    sku : '000003',
                    price : 2.9900000000000002,
                    model : '羊奶',
                    uuid : 'b0d40b00-feea-ceaa-64be-63ff590e9c84',
                    categoryId : 'c018824c-34b1-40be-af97-8110b3c92948',
                    spec : '100片',
                    name : '奶片'
                },
                unitPrice : 2.9900000000000002,
                note : '',
                uuid : 'ef00d476-a5c6-4663-ff44-0a3d5de6e4e8'
            },
            {
                quantity : 1,
                product : {
                    barcode : '111111',
                    sku : '000001',
                    price : 11.99,
                    model : '成人',
                    uuid : '9aa8d7ed-7182-6daf-9e47-2d3c35157d60',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '蔓越莓'
                },
                unitPrice : 11.99,
                note : '',
                uuid : '6232a366-adf9-32c9-68d4-68dd2e279285'
            },
            {
                quantity : 1,
                product : {
                    barcode : '444444',
                    sku : '000004',
                    price : 14,
                    model : '成人',
                    uuid : '3bc589dd-717c-620e-4508-1e706dfd9c70',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '钙片'
                },
                unitPrice : 14,
                note : '',
                uuid : 'd70e4a5d-5c91-24d1-bd25-c7b4c9588bf4'
            }
        ],
        company: {
            uuid: '5f93c220-3d5b-4d89-9898-269e6ef41178',
            name: 'BIO ISLAND',
            addressLine1: '1 Hello street',
            addressLine2: '',
            suburb: 'Adelaide',
            postcode: '5000',
            stateId: 2,
            countryId: 1,
            contactPerson: 'Jim Green',
            contactPhone: '0429990000',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        warehouse: {
            uuid: '0b6657a7-ff4e-467a-a2b2-61285a31a8ce',
            name: 'Chadstone',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        user: {
            uuid: '4596dd6d-19b2-42f2-ad60-291dec153ead',
            firstName: '云',
            lastName: '马',
            role: 1,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        division: {
            uuid: 'f2826e1e-8ec8-4b5f-a731-ddbca4150b91',
            name: '仓库',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        description : '第一个订单',
        extraInfo : 'Extra',
        createdAt : '2017-11-19T16:13:17+11:00',
        updatedAt : '2017-11-19T16:13:17+11:00'
    },
    {
        uuid : 'd52ddd5d-e94f-d3d6-ab38-236387e16310',
        id: 'PO-0000002',
        type: 1,
        status : 1,
        bankAccount: {
            uuid: 'c18cee1f-428d-48dc-8bf8-51729171ff44',
            name: 'CBA Gold Saver',
            balance: 12983.00,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        payAmount: 230,
        orderProducts : [
            {
                quantity : '3',
                product : {
                    barcode : '2222222',
                    sku : '000002',
                    price : 29.989999999999998,
                    model : '成人',
                    uuid : 'f1314509-d59d-e00f-fbf1-cbc0ce87a8f5',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '鱼油'
                },
                unitPrice : 29.989999999999998,
                note : '',
                uuid : 'fd32cd8f-da34-893e-de5e-30f637974e91'
            },
            {
                quantity : 1,
                product : {
                    barcode : '444444',
                    sku : '000004',
                    price : 14,
                    model : '成人',
                    uuid : '3bc589dd-717c-620e-4508-1e706dfd9c70',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '钙片'
                },
                unitPrice : 14,
                note : '',
                uuid : 'eb3e9e12-041a-4f7d-7937-d723fa1d78cc'
            }
        ],
        company: {
            uuid: 'b40efbc7-fc08-4695-af42-163a73a90791',
            name: 'SWISSE',
            addressLine1: '123 Abc street',
            addressLine2: '',
            suburb: 'Melbourne',
            postcode: '3000',
            stateId: 4,
            countryId: 1,
            contactPerson: 'Jack Ma',
            contactPhone: '0399990000',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        warehouse: {
            uuid: '2aa49891-b198-48e8-9660-5a99f3dc6953',
            name: 'Clayton',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        user: {
            uuid: '7042a0ec-f698-4def-8de5-79632af18cf9',
            firstName: '化腾',
            lastName: '马',
            role: 1,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        division: {
            uuid: '16a55164-b97c-4cde-8695-ad7067c353fa',
            name: '销售',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        description: 'test',
        extraInfo: 'testExtroInfo',
        createdAt : '2017-11-19T16:23:37+11:00',
        updatedAt : '2017-11-19T16:13:17+11:00'
    },
    {
        uuid : 'fe773cf4-0a54-4b50-ba28-fd1bac884665',
        id: 'PO-0000003',
        type: 1,
        status : 1,
        bankAccount: {
            uuid: 'bf51166f-3db3-4c88-9ecd-6d8c43abae63',
            name: 'ICBC',
            balance: 23.18,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        payAmount: 330,
        orderProducts : [
            {
                quantity : 1,
                product : {
                    barcode : '111111',
                    sku : '000001',
                    price : 11.99,
                    model : '成人',
                    uuid : '9aa8d7ed-7182-6daf-9e47-2d3c35157d60',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '蔓越莓'
                },
                unitPrice : 11.99,
                note : '',
                uuid : '2eff149b-2c76-5f8a-e602-debad86fe09f'
            },
            {
                quantity : 1,
                product : {
                    barcode : '333333',
                    sku : '000003',
                    price : 2.9900000000000002,
                    model : '羊奶',
                    uuid : 'b0d40b00-feea-ceaa-64be-63ff590e9c84',
                    categoryId : 'c018824c-34b1-40be-af97-8110b3c92948',
                    spec : '100片',
                    name : '奶片'
                },
                unitPrice : 2.9900000000000002,
                note : '',
                uuid : 'ef00d476-a5c6-4663-ff44-0a3d5de6e4e8'
            },
            {
                quantity : 1,
                product : {
                    barcode : '111111',
                    sku : '000001',
                    price : 11.99,
                    model : '成人',
                    uuid : '9aa8d7ed-7182-6daf-9e47-2d3c35157d60',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '蔓越莓'
                },
                unitPrice : 11.99,
                note : '',
                uuid : '6232a366-adf9-32c9-68d4-68dd2e279285'
            },
            {
                quantity : 1,
                product : {
                    barcode : '444444',
                    sku : '000004',
                    price : 14,
                    model : '成人',
                    uuid : '3bc589dd-717c-620e-4508-1e706dfd9c70',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '钙片'
                },
                unitPrice : 14,
                note : '',
                uuid : 'd70e4a5d-5c91-24d1-bd25-c7b4c9588bf4'
            }
        ],
        company: {
            uuid: '35b20f8e-118e-4b9a-a056-4beb017288c0',
            name: 'BLACKMORE',
            addressLine1: '23 Sydney street',
            addressLine2: '',
            suburb: 'Sydney',
            postcode: '2000',
            stateId: 1,
            countryId: 1,
            contactPerson: 'Lion Messi',
            contactPhone: '0289990000',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        warehouse: {
            uuid: '0b6657a7-ff4e-467a-a2b2-61285a31a8ce',
            name: 'Chadstone',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        user : {
            uuid: 'c31bed14-3832-4ab9-a145-92f142f0bbcf',
            firstName: '强东',
            lastName: '刘',
            role: 2,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        division : {
            uuid: '6e224b62-1c4c-49cd-aefc-63cd36b08b16',
            name: '财务',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        description : '第一个订单',
        extraInfo : 'Extra',
        createdAt : '2017-11-19T16:13:17+11:00',
        updatedAt: '2017-11-19T16:23:37+11:00'
    },
    {
        uuid : 'c00e3511-c7f7-45b3-bff1-6d68437983b6',
        id: 'PO-0000004',
        type: 1,
        status: 2,
        bankAccount: {
            uuid: '1c303711-e40b-49a3-b42f-1b9233c5fe47',
            name: 'CitiBank',
            balance: 8920.81,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        payAmount: 310,
        orderProducts : [
            {
                quantity : '3',
                product : {
                    barcode : '2222222',
                    sku : '000002',
                    price : 29.989999999999998,
                    model : '成人',
                    uuid : 'f1314509-d59d-e00f-fbf1-cbc0ce87a8f5',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '鱼油'
                },
                unitPrice : 29.989999999999998,
                note : '',
                uuid : 'fd32cd8f-da34-893e-de5e-30f637974e91'
            },
            {
                quantity : 1,
                product : {
                    barcode : '444444',
                    sku : '000004',
                    price : 14,
                    model : '成人',
                    uuid : '3bc589dd-717c-620e-4508-1e706dfd9c70',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '钙片'
                },
                unitPrice : 14,
                note : '',
                uuid : 'eb3e9e12-041a-4f7d-7937-d723fa1d78cc'
            }
        ],
        company: {
            uuid: 'ed7fc1a0-b646-4c03-add6-e32188c1ddfb',
            name: 'HEALTHY CARE',
            addressLine1: '10 Test street',
            addressLine2: '',
            suburb: 'Brisbane',
            postcode: '4000',
            stateId: 8,
            countryId: 1,
            contactPerson: 'Ronald Lee',
            contactPhone: '0799993000',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        warehouse: {
            uuid: '0b6657a7-ff4e-467a-a2b2-61285a31a8ce',
            name: 'Chadstone',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        user: {
            uuid: '47a8247c-90a1-4254-8293-b8d4ec179307',
            firstName: '彦宏',
            lastName: '李',
            role: 1,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        division: {
            uuid: 'f2826e1e-8ec8-4b5f-a731-ddbca4150b91',
            name: '仓库',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        description: 'Test',
        extraInfo: 'Extra',
        createdAt: '2017-11-19T16:23:37+11:00',
        updatedAt: '2017-11-19T16:23:37+11:00'
    },
    {
        uuid : 'b7b976d5-3f39-433d-879f-feb3ec491ea1',
        id: 'PRO-0000001',
        type: 2,
        status: 2,
        bankAccount: {
            uuid: 'd2917696-6673-4a06-addf-e3728da58a6a',
            name: 'HSBC',
            balance: 209.10,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        payAmount: 1200,
        orderProducts : [
            {
                quantity : '3',
                product : {
                    barcode : '2222222',
                    sku : '000002',
                    price : 29.989999999999998,
                    model : '成人',
                    uuid : 'f1314509-d59d-e00f-fbf1-cbc0ce87a8f5',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '鱼油'
                },
                unitPrice : 29.989999999999998,
                note : '',
                uuid : 'fd32cd8f-da34-893e-de5e-30f637974e91'
            },
            {
                quantity : 1,
                product : {
                    barcode : '444444',
                    sku : '000004',
                    price : 14,
                    model : '成人',
                    uuid : '3bc589dd-717c-620e-4508-1e706dfd9c70',
                    categoryId : '526e4b43-f393-4d6c-aca9-dbd1d3c06d2f',
                    spec : '30粒',
                    name : '钙片'
                },
                unitPrice : 14,
                note : '',
                uuid : 'eb3e9e12-041a-4f7d-7937-d723fa1d78cc'
            }
        ],
        company: {
            uuid: 'ed7fc1a0-b646-4c03-add6-e32188c1ddfb',
            name: 'HEALTHY CARE',
            addressLine1: '10 Test street',
            addressLine2: '',
            suburb: 'Brisbane',
            postcode: '4000',
            stateId: 8,
            countryId: 1,
            contactPerson: 'Ronald Lee',
            contactPhone: '0799993000',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        warehouse: {
            uuid: '0b6657a7-ff4e-467a-a2b2-61285a31a8ce',
            name: 'Chadstone',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        user: {
            uuid: '47a8247c-90a1-4254-8293-b8d4ec179307',
            firstName: '彦宏',
            lastName: '李',
            role: 1,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        division: {
            uuid: 'f2826e1e-8ec8-4b5f-a731-ddbca4150b91',
            name: '仓库',
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        description: 'Test',
        extraInfo: 'Extra',
        createdAt: '2017-11-19T16:23:37+11:00',
        updatedAt: '2017-11-19T16:23:37+11:00'
    },
];
