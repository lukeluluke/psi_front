export const ExpenseTransactions = [
    {
        uuid: '5dc3278d-2825-3d57-d928-5e11c7ddb5e9',
        status: 2,
        expenseItems: [
          {
            uuid: '05030651-befd-6c49-d7fc-bb082a6acbd5',
            expense: {
              uuid: 'f1314509-d59d-e00f-fbf1-cbc0ce87a8f5',
              name: '仓库',
              expenseCategory: {
                uuid: '392a58c0-6ab3-4284-ae1f-d4ca56fa9670',
                name: '租金',
                createdAt: '2017-11-18T02:14:56+11:00',
                updatedAt: '2017-11-18T02:14:56+11:00'
              },
              description: '仓库的租金应该是每月的第一天支付',
              createdAt: '2017-11-18T02:14:56+11:00',
              updatedAt: '2017-11-18T02:14:56+11:00'
            },
            amount: 3000,
            note: '',
            createdAt: '2017-12-09T15:57:34+11:00',
            updatedAt: '2017-12-09T15:57:34+11:00'
          }
        ],
        toWhom: {
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
            createdAt: '2017-11-18T02:14:56+11:0',
            updatedAt: '2017-11-18T02:14:56+11:0'
        },
        byWhom: {
            uuid: '4596dd6d-19b2-42f2-ad60-291dec153ead',
            firstName: '云',
            lastName: '马',
            role: 1,
            createdAt: '2017-11-18T02:14:56+11:0',
            updatedAt: '2017-11-18T02:14:56+11:0'
        },
        division: {
            uuid: 'f2826e1e-8ec8-4b5f-a731-ddbca4150b91',
            name: '仓库',
            createdAt: '2017-11-18T02:14:56+11:0',
            updatedAt: '2017-11-18T02:14:56+11:0'
        },
        bankAccount: {
            uuid: 'c18cee1f-428d-48dc-8bf8-51729171ff44',
            name: 'CBA Gold Saver',
            balance: 12983.00,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        note: '支付仓库的租金',
        createdAt: '2017-12-09T15:56:42+11:00',
        updatedAt: '2017-12-09T15:56:42+11:00'
    },
    {
        uuid: 'cd81c599-89a8-83d1-91ad-153e79c57391',
        status: 1,
        expenseItems: [
          {
            uuid: 'e312fe99-2223-8170-d8b6-ca3e8f146f9b',
            expense: {
              uuid: '9aa8d7ed-7182-6daf-9e47-2d3c35157d60',
              name: '申通',
              expenseCategory: {
                uuid: '48f8661b-0d39-4a3a-8588-5f6d959d1739',
                name: '物流',
                createdAt: '2017-11-18T02:14:56+11:00',
                updatedAt: '2017-11-18T02:14:56+11:00'
              },
              'description': '申通是一家上海的物流公司',
              createdAt: '2017-11-18T02:14:56+11:00',
              updatedAt: '2017-11-18T02:14:56+11:00'
            },
            amount: 25,
            note: '发往上海',
            createdAt: '2017-12-09T16:05:49+11:00',
            updatedAt: '2017-12-09T16:05:49+11:00'
          },
          {
            uuid: '26732571-0946-6014-0ad7-ee171ac2100d',
            expense: {
              uuid: '430c6b66-2fc4-8b05-0cf8-5a924e054ad6',
              name: '顺丰',
              expenseCategory: {
                uuid: '48f8661b-0d39-4a3a-8588-5f6d959d1739',
                name: '物流',
                createdAt: '2017-11-18T02:14:56+11:00',
                updatedAt: '2017-11-18T02:14:56+11:00'
              },
              'description': '申通是一家香港的物流公司',
              createdAt: '2017-11-18T02:14:56+11:00',
              updatedAt: '2017-11-18T02:14:56+11:00'
            },
            amount: 65,
            note: '发往香港',
            createdAt: '2017-12-09T16:05:52+11:00',
            updatedAt: '2017-12-09T16:05:52+11:00'
          },
          {
            uuid: '95b366e5-294b-365c-2cd1-73e09a1dc1b3',
            expense: {
              uuid: 'f1314509-d59d-e00f-fbf1-cbc0ce87a8f5',
              name: '仓库',
              expenseCategory: {
                uuid: '392a58c0-6ab3-4284-ae1f-d4ca56fa9670',
                name: '租金',
                createdAt: '2017-11-18T02:14:56+11:00',
                updatedAt: '2017-11-18T02:14:56+11:00'
              },
              'description': '仓库的租金应该是每月的第一天支付',
              createdAt: '2017-11-18T02:14:56+11:00',
              updatedAt: '2017-11-18T02:14:56+11:00'
            },
            amount: 350,
            note: '保税区仓库费用',
            createdAt: '2017-12-09T16:05:54+11:00',
            updatedAt: '2017-12-09T16:05:54+11:00'
          }
        ],
        toWhom: {
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
            createdAt: '2017-11-18T02:14:56+11:0',
            updatedAt: '2017-11-18T02:14:56+11:0'
        },
        byWhom: {
            uuid: '7042a0ec-f698-4def-8de5-79632af18cf9',
            firstName: '化腾',
            lastName: '马',
            role: 1,
            createdAt: '2017-11-18T02:14:56+11:0',
            updatedAt: '2017-11-18T02:14:56+11:0'
        },
        division: {
            uuid: '6e224b62-1c4c-49cd-aefc-63cd36b08b16',
            name: '财务',
            createdAt: '2017-11-18T02:14:56+11:0',
            updatedAt: '2017-11-18T02:14:56+11:0'
        },
        bankAccount: {
            uuid: '33d4991e-7344-4df6-b4bb-62228c9cdd57',
            name: 'ANZ Platinum',
            balance: 3890.22,
            createdAt: '2017-11-18T02:14:56+11:00',
            updatedAt: '2017-11-18T02:14:56+11:00'
        },
        note: '',
        createdAt: '2017-12-09T16:05:38+11:00',
        updatedAt: '2017-12-09T16:05:38+11:00'
    }
]
