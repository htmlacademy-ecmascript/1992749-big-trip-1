// export const mockPoints = []; // для проверки заглушки

/*
export const mockPoints = [ // для проверки блокировки фильтров
  {
    'id': '5f9d6044-1287-494c-97c7-9387523e169f',
    'type': 'restaurant',
    'dateFrom': '2023-11-20T03:34:56.723Z',
    'dateTo': '2023-11-20T19:07:03.420Z',
    'destination': '63918c5c-66a5-4522-88dd-3a6b15bbe351',
    'basePrice': 1100,
    'isFavorite': false,
    'offers': [
      '3f591653-4259-4891-9e3f-609e11fd5d36',
      'f24530f9-d1ae-4aa9-9a1c-89e31e815876'
    ]
  },
  {
    'id': '445c6ce1-93a7-465a-bccd-52b1d075f972',
    'type': 'ship',
    'dateFrom': '2023-11-20T19:07:03.420Z',
    'dateTo': '2023-11-21T14:45:57.058Z',
    'destination': '63918c5c-66a5-4522-88dd-3a6b15bbe351',
    'basePrice': 700,
    'isFavorite': true,
    'offers': [
      'ddc51794-070d-4a61-9625-e598d0e59389',
      '5611e534-eacd-4b90-9bf7-b7aae348de6c',
      '2d57cd36-9d17-4415-905a-ef53caa9105b',
      '3bcf18f0-1a5f-4e2e-8339-18684c4c766f'
    ]
  },
  {
    'id': '0b925062-6725-4937-9cd6-b9d2e28aaaa5',
    'type': 'ship',
    'dateFrom': '2023-11-21T14:45:57.058Z',
    'dateTo': '2023-11-21T20:47:28.859Z',
    'destination': '21763c27-5d52-483a-8af7-af84e5814a9b',
    'basePrice': 500,
    'isFavorite': true,
    'offers': [
      'ddc51794-070d-4a61-9625-e598d0e59389',
      '5611e534-eacd-4b90-9bf7-b7aae348de6c',
      'fe16e69b-9657-4b99-a5b1-b5f428459747',
      '3bcf18f0-1a5f-4e2e-8339-18684c4c766f'
    ]
  },
  {
    'id': '527b03f1-3a08-4712-b231-b5ef38e4ffb9',
    'type': 'sightseeing',
    'dateFrom': '2023-11-21T20:47:28.859Z',
    'dateTo': '2023-11-22T07:17:00.353Z',
    'destination': '762c650d-b95f-409e-93e1-247126f8c1cb',
    'basePrice': 500,
    'isFavorite': false,
    'offers': []
  },
  {
    'id': 'ca814c64-7a8f-4031-954e-b09c21e3e98c',
    'type': 'drive',
    'dateFrom': '2023-11-22T07:17:00.353Z',
    'dateTo': '2023-11-22T18:34:52.034Z',
    'destination': '1b3a3cb9-f7f2-4db5-86cd-f31b1cf2275b',
    'basePrice': 300,
    'isFavorite': true,
    'offers': [
      '8bb8c278-0627-4f67-aaa9-78ce7fc449b6',
      '7a108838-9f7a-4c60-b705-947fc3c40e3a'
    ]
  },
  {
    'id': 'd700a418-2313-4e98-9246-92302d7946be',
    'type': 'train',
    'dateFrom': '2023-11-22T18:34:52.034Z',
    'dateTo': '2023-11-23T14:55:53.288Z',
    'destination': '1378c813-4b3b-4251-95b9-5dc2830be376',
    'basePrice': 700,
    'isFavorite': true,
    'offers': [
      'c56662ff-2587-4564-8bec-5bc56388ab61',
      '0dc628ee-1ce6-4198-9ae0-6b094a3afb87',
      '96fe2271-d5f5-47aa-8d00-e878e72368b5'
    ]
  },
  {
    'id': 'fea8bab7-e6a0-4b10-b1cb-9573fe435b39',
    'type': 'restaurant',
    'dateFrom': '2023-11-23T14:55:53.288Z',
    'dateTo': '2023-11-24T02:02:24.011Z',
    'destination': '96e2cb7e-16ff-4332-94ba-e399fff15b99',
    'basePrice': 900,
    'isFavorite': true,
    'offers': [
      '3f591653-4259-4891-9e3f-609e11fd5d36',
      'f24530f9-d1ae-4aa9-9a1c-89e31e815876'
    ]
  },
  {
    'id': '69f1bd80-e4b1-4dc2-a9fb-ddb936af71d1',
    'type': 'flight',
    'dateFrom': '2023-11-24T02:02:24.011Z',
    'dateTo': '2023-11-24T19:00:57.729Z',
    'destination': 'a956955a-4b89-4deb-b437-977a20d600a9',
    'basePrice': 600,
    'isFavorite': false,
    'offers': [
      '334a3ca0-3c9d-4234-9e26-bc0fcb704784',
      '2c79620c-1d5a-4161-9436-a3b121f27e83',
      'a07d3b6e-98e3-4145-bd45-09fd6ffdf64c'
    ]
  },
  {
    'id': '2fa3fc1c-2098-4ef3-b516-7243dacd1780',
    'type': 'ship',
    'dateFrom': '2023-11-24T19:00:57.729Z',
    'dateTo': '2023-11-24T23:43:19.300Z',
    'destination': 'fca27865-2aa8-4528-b18a-4ed0225e971f',
    'basePrice': 600,
    'isFavorite': false,
    'offers': [
      '5611e534-eacd-4b90-9bf7-b7aae348de6c',
      'a5dd9872-9701-4b01-9e6f-eb307b8c4aaa'
    ]
  },
  {
    'id': '9cadb86e-cc26-425b-a6be-3393a072176a',
    'type': 'bus',
    'dateFrom': '2023-11-24T23:43:19.300Z',
    'dateTo': '2023-11-25T20:44:09.425Z',
    'destination': '3935a66e-c336-4242-b66e-27c93e35058b',
    'basePrice': 800,
    'isFavorite': true,
    'offers': [
      'ab23fcab-abb9-4190-b802-0ed08f6ea28e',
      'ed7962f5-4385-44ec-a55c-2ed49b64f035',
      'ca976d9f-0dd7-4469-8520-86c1182bb5f4'
    ]
  },
  {
    'id': '7d127792-37f2-488b-97bc-b532aebce24c',
    'type': 'check-in',
    'dateFrom': '2023-11-25T20:44:09.425Z',
    'dateTo': '2023-11-26T12:01:17.603Z',
    'destination': 'f17dec74-7db2-49c6-9a0d-6338a362539c',
    'basePrice': 300,
    'isFavorite': false,
    'offers': [
      '3f5b5abf-e4ea-43c4-8389-83c8d9df0442',
      'ae20b499-94f9-4e46-8770-5df60ae49909',
      'd75e73b4-a517-4fcb-b856-c3bb9f49e0a5'
    ]
  },
  {
    'id': 'c5a10bf6-9a56-466b-8806-769364008ee8',
    'type': 'bus',
    'dateFrom': '2023-11-26T12:01:17.603Z',
    'dateTo': '2023-11-26T16:40:35.490Z',
    'destination': 'cdc15e18-9849-4092-a7f2-b89a4ec5c196',
    'basePrice': 800,
    'isFavorite': true,
    'offers': [
      'ab23fcab-abb9-4190-b802-0ed08f6ea28e',
      'ed7962f5-4385-44ec-a55c-2ed49b64f035',
      'ca976d9f-0dd7-4469-8520-86c1182bb5f4'
    ]
  },
  {
    'id': '8777f69b-80ca-4f39-994b-dc288383e4c0',
    'type': 'sightseeing',
    'dateFrom': '2023-11-26T16:40:35.490Z',
    'dateTo': '2023-11-26T19:28:29.408Z',
    'destination': 'df3ddcaf-78d6-49b2-aab3-2d954216e277',
    'basePrice': 800,
    'isFavorite': true,
    'offers': []
  },
  {
    'id': '64d251fc-6e46-4f90-83c3-d5babed4e4ce',
    'type': 'flight',
    'dateFrom': '2023-11-26T19:28:29.408Z',
    'dateTo': '2023-11-26T21:40:55.951Z',
    'destination': 'df3ddcaf-78d6-49b2-aab3-2d954216e277',
    'basePrice': 1000,
    'isFavorite': true,
    'offers': [
      '334a3ca0-3c9d-4234-9e26-bc0fcb704784',
      'ff3e2f3f-9b88-440f-9680-cc4dea1f18e1',
      'a07d3b6e-98e3-4145-bd45-09fd6ffdf64c'
    ]
  },
  {
    'id': 'd9ade04f-29b8-4036-a94f-bf808587f7fc',
    'type': 'bus',
    'dateFrom': '2023-11-26T21:40:55.951Z',
    'dateTo': '2023-11-27T16:55:38.846Z',
    'destination': '3935a66e-c336-4242-b66e-27c93e35058b',
    'basePrice': 800,
    'isFavorite': false,
    'offers': [
      'ab23fcab-abb9-4190-b802-0ed08f6ea28e',
      'ed7962f5-4385-44ec-a55c-2ed49b64f035',
      'ca976d9f-0dd7-4469-8520-86c1182bb5f4'
    ]
  },
  {
    'id': '6cf3debd-05d5-465a-b471-c1c214e259c2',
    'type': 'flight',
    'dateFrom': '2023-11-27T16:55:38.846Z',
    'dateTo': '2023-11-28T03:01:29.708Z',
    'destination': '762c650d-b95f-409e-93e1-247126f8c1cb',
    'basePrice': 600,
    'isFavorite': false,
    'offers': [
      '334a3ca0-3c9d-4234-9e26-bc0fcb704784',
      'ff3e2f3f-9b88-440f-9680-cc4dea1f18e1',
      'cf3bf986-b6a3-41e6-882e-83663940975b',
      'a07d3b6e-98e3-4145-bd45-09fd6ffdf64c'
    ]
  },
  {
    'id': '4d4f5f88-4c0f-4c51-9a51-a1fb395ff2b8',
    'type': 'drive',
    'dateFrom': '2023-11-28T03:01:29.708Z',
    'dateTo': '2023-11-28T08:56:52.605Z',
    'destination': '962439e9-710f-40f4-803c-e404a1a57d27',
    'basePrice': 1000,
    'isFavorite': true,
    'offers': [
      '8bb8c278-0627-4f67-aaa9-78ce7fc449b6',
      '7a108838-9f7a-4c60-b705-947fc3c40e3a'
    ]
  },
  {
    'id': '70f13ad4-ea42-48c6-81fa-8ebed003042e',
    'type': 'drive',
    'dateFrom': '2023-11-28T08:56:52.605Z',
    'dateTo': '2023-11-29T05:37:23.831Z',
    'destination': '774f2c2e-039f-4484-b989-4084ef029de3',
    'basePrice': 800,
    'isFavorite': true,
    'offers': [
      '8bb8c278-0627-4f67-aaa9-78ce7fc449b6',
      '7a108838-9f7a-4c60-b705-947fc3c40e3a'
    ]
  },
  {
    'id': 'ac01923f-f076-4ac4-a284-38c0a0f902ab',
    'type': 'restaurant',
    'dateFrom': '2023-11-29T05:37:23.831Z',
    'dateTo': '2023-11-29T19:35:51.454Z',
    'destination': 'df3ddcaf-78d6-49b2-aab3-2d954216e277',
    'basePrice': 1100,
    'isFavorite': true,
    'offers': [
      '3f591653-4259-4891-9e3f-609e11fd5d36',
      'f24530f9-d1ae-4aa9-9a1c-89e31e815876'
    ]
  },
  {
    'id': '78d88b42-0187-4b41-99d4-58b0dda8e1f2',
    'type': 'sightseeing',
    'dateFrom': '2023-11-29T19:35:51.454Z',
    'dateTo': '2023-11-30T04:38:15.579Z',
    'destination': '844d4013-1953-47f2-9c56-a745a15d6fd3',
    'basePrice': 1000,
    'isFavorite': true,
    'offers': []
  }
];
*/


export const mockPoints = [
  {
    'id': 'be6fc6dd-a271-4890-bd55-ee0e6230b689',
    'type': 'flight',
    'dateFrom': '2023-12-17T15:39:22.360Z',
    'dateTo': '2023-12-17T22:37:50.074Z',
    'destination': '463e9ec8-b77b-40d2-b6d2-e59642ea69b7',
    'basePrice': 900,
    'isFavorite': false,
    'offers': [
      '57f24d44-e1cd-46a5-a442-cd7dea92aa23'
    ]
  },
  {
    'id': '4a4fc67f-5c52-4f7e-9bb1-70b328789d61',
    'type': 'drive',
    'dateFrom': '2023-12-17T22:37:50.074Z',
    'dateTo': '2023-12-18T08:45:13.695Z',
    'destination': '463e9ec8-b77b-40d2-b6d2-e59642ea69b7',
    'basePrice': 300,
    'isFavorite': false,
    'offers': [
      'b3feca34-6ed9-4f15-890d-004d26e75d9f',
      '932d9b60-6cdf-4007-98d1-ea1e4486d505'
    ]
  },
  {
    'id': '005dee9a-3caa-4e70-8f64-370341a8339d',
    'type': 'ship',
    'dateFrom': '2023-12-18T08:45:13.695Z',
    'dateTo': '2023-12-19T00:22:34.859Z',
    'destination': '85687362-04be-467c-a77c-75810f760533',
    'basePrice': 800,
    'isFavorite': true,
    'offers': [
      'ab7fbf73-dbbb-458b-94c4-c911efd5ead0',
      '9ad3fa8a-bf9f-4626-8139-0c541d8b3114',
      'e72ab76e-53df-48f6-a667-aca3d58b9036'
    ]
  },
  {
    'id': 'a0f076a7-ce1c-479f-bc78-7c271e27f832',
    'type': 'bus',
    'dateFrom': '2023-12-19T00:22:34.859Z',
    'dateTo': '2023-12-19T13:17:58.476Z',
    'destination': '680224f9-a4ae-40a5-87c3-036c25ae97a7',
    'basePrice': 300,
    'isFavorite': false,
    'offers': [
      '6eb80fa3-6cf4-4469-b852-0e6b08274991',
      '0eb34657-77f7-4a8b-bf26-6a92e4b5ec34',
      '3cb35270-950d-4311-a6fe-41143b510536'
    ]
  },
  {
    'id': '9876cf4d-252d-432a-8eb0-1267b4a81b91',
    'type': 'drive',
    'dateFrom': '2023-12-19T13:17:58.476Z',
    'dateTo': '2023-12-19T23:41:57.793Z',
    'destination': 'bffc223b-30db-493d-aed4-e7091b0dff2f',
    'basePrice': 400,
    'isFavorite': false,
    'offers': [
      'b3feca34-6ed9-4f15-890d-004d26e75d9f',
      '932d9b60-6cdf-4007-98d1-ea1e4486d505'
    ]
  },
  {
    'id': '4b53f3ed-e09b-449d-aeae-5e71495eb7be',
    'type': 'check-in',
    'dateFrom': '2023-12-19T23:41:57.793Z',
    'dateTo': '2023-12-20T20:38:28.248Z',
    'destination': '485580d6-8d8b-4695-bf7d-d16dd3f89b80',
    'basePrice': 1000,
    'isFavorite': false,
    'offers': [
      '59ec0894-8185-4f11-8018-86824b1c5eb1',
      'fd0dda03-206d-45e2-9b49-0fdbf4edb598',
      '308ea015-f936-41af-b8e0-4db298b417c0'
    ]
  },
  {
    'id': '56f60dae-ec03-472d-b0dd-dcc5b7462aee',
    'type': 'taxi',
    'dateFrom': '2023-12-20T20:38:28.248Z',
    'dateTo': '2023-12-21T08:54:19.457Z',
    'destination': '910ecfc8-0810-4519-8f74-6cdd2bbee1a1',
    'basePrice': 500,
    'isFavorite': false,
    'offers': [
      '0524ba2a-9e1d-4477-84c3-9929b32cbdc0',
      '98b145f6-6f92-4706-9f7b-9b8e9347e5c8'
    ]
  },
  {
    'id': 'b67f0a6f-1005-47f3-8579-9ececc7fcb5e',
    'type': 'restaurant',
    'dateFrom': '2023-12-21T08:54:19.457Z',
    'dateTo': '2023-12-21T16:44:53.778Z',
    'destination': 'aeb2ae5f-212d-4953-8b8a-1c64f984c10b',
    'basePrice': 900,
    'isFavorite': false,
    'offers': [
      'b5eea080-6241-420f-8d9d-67a6efb2cc5c',
      'd86deb2a-a434-4319-896c-5a7e59829faa'
    ]
  },
  {
    'id': 'd2249adf-caf6-4860-82c2-4abeddcc20d5',
    'type': 'check-in',
    'dateFrom': '2023-12-21T16:44:53.778Z',
    'dateTo': '2023-12-22T08:30:19.878Z',
    'destination': '3bd5d119-fd29-4c68-a314-a36f48306938',
    'basePrice': 800,
    'isFavorite': true,
    'offers': [
      '313620a7-7e01-49eb-8bcc-154352743e73',
      '59ec0894-8185-4f11-8018-86824b1c5eb1',
      'fd0dda03-206d-45e2-9b49-0fdbf4edb598',
      '308ea015-f936-41af-b8e0-4db298b417c0'
    ]
  },
  {
    'id': '79dc2f74-9235-4231-bb1f-efdb10a896f0',
    'type': 'ship',
    'dateFrom': '2023-12-22T08:30:19.878Z',
    'dateTo': '2023-12-22T22:45:20.105Z',
    'destination': '2524ed4e-6c8c-49ae-85ea-9bc8585b749a',
    'basePrice': 600,
    'isFavorite': true,
    'offers': [
      'ab7fbf73-dbbb-458b-94c4-c911efd5ead0',
      '9ad3fa8a-bf9f-4626-8139-0c541d8b3114'
    ]
  },
  {
    'id': '8ca8c75e-2857-4c03-a2d4-00c97133148d',
    'type': 'train',
    'dateFrom': '2023-12-22T22:45:20.105Z',
    'dateTo': '2023-12-23T05:30:11.823Z',
    'destination': 'd7a6a611-0bc0-49a5-839f-e04adc742928',
    'basePrice': 800,
    'isFavorite': true,
    'offers': [
      '2c1a2d7f-b481-4586-a172-20dd1592351c',
      '718ab729-dee4-438b-8827-39543f23fd3c',
      '85bde352-e7c7-4562-af4f-df018dd282a8'
    ]
  },
  {
    'id': '51a70209-7c23-498b-bb1e-5a8de9ad318a',
    'type': 'restaurant',
    'dateFrom': '2023-12-23T05:30:11.823Z',
    'dateTo': '2023-12-23T18:40:44.667Z',
    'destination': '839989fd-f49b-4827-ad99-157cd6cdce6d',
    'basePrice': 600,
    'isFavorite': true,
    'offers': [
      'b5eea080-6241-420f-8d9d-67a6efb2cc5c',
      'd86deb2a-a434-4319-896c-5a7e59829faa'
    ]
  },
  {
    'id': 'c95c8e2b-1bad-4033-8083-1ab707e469bb',
    'type': 'train',
    'dateFrom': '2023-12-23T18:40:44.667Z',
    'dateTo': '2023-12-24T01:09:11.043Z',
    'destination': '8f865db7-5b51-4d6b-9e50-656c4f0bc4e1',
    'basePrice': 700,
    'isFavorite': true,
    'offers': [
      '2c1a2d7f-b481-4586-a172-20dd1592351c',
      '718ab729-dee4-438b-8827-39543f23fd3c',
      '85bde352-e7c7-4562-af4f-df018dd282a8'
    ]
  },
  {
    'id': '049913a5-0a2a-4ff3-b865-3c8103822bd5',
    'type': 'sightseeing',
    'dateFrom': '2023-12-24T01:09:11.043Z',
    'dateTo': '2023-12-24T05:45:22.808Z',
    'destination': 'bffc223b-30db-493d-aed4-e7091b0dff2f',
    'basePrice': 500,
    'isFavorite': true,
    'offers': []
  },
  {
    'id': '2586699a-e440-4964-8034-dd40aba3caee',
    'type': 'restaurant',
    'dateFrom': '2023-12-24T05:45:22.808Z',
    'dateTo': '2023-12-24T17:15:09.205Z',
    'destination': 'd1544164-6560-4bf7-8f6e-ff21a64194e0',
    'basePrice': 1100,
    'isFavorite': false,
    'offers': [
      'b5eea080-6241-420f-8d9d-67a6efb2cc5c',
      'd86deb2a-a434-4319-896c-5a7e59829faa'
    ]
  },
  {
    'id': '2aebb3ad-d083-43c3-bfa9-d5a49468b1b9',
    'type': 'train',
    'dateFrom': '2023-12-24T17:15:09.205Z',
    'dateTo': '2023-12-25T03:56:04.844Z',
    'destination': '66ea0601-0940-47c6-8c79-5811b4062837',
    'basePrice': 700,
    'isFavorite': true,
    'offers': [
      '2c1a2d7f-b481-4586-a172-20dd1592351c',
      '718ab729-dee4-438b-8827-39543f23fd3c',
      '85bde352-e7c7-4562-af4f-df018dd282a8'
    ]
  },
  {
    'id': 'ac76ff8f-7736-430d-a4b5-60ee82a4c116',
    'type': 'flight',
    'dateFrom': '2023-12-25T03:56:04.844Z',
    'dateTo': '2023-12-25T12:07:28.395Z',
    'destination': 'a47df85f-a5e8-45c4-85c4-c38010cb0c71',
    'basePrice': 300,
    'isFavorite': false,
    'offers': [
      '1f51cf5a-eb2c-4316-acfc-14b2fcc97bd5',
      '2e55551b-c20b-453a-afa5-944e75ef3dc3',
      '6ffead53-d953-48ef-b74d-cc14a359d407',
      '57f24d44-e1cd-46a5-a442-cd7dea92aa23'
    ]
  },
  {
    'id': '1e93f99a-010d-4590-8f84-d8d2f8a23a69',
    'type': 'bus',
    'dateFrom': '2023-12-25T12:07:28.395Z',
    'dateTo': '2023-12-25T19:11:54.900Z',
    'destination': '3bd5d119-fd29-4c68-a314-a36f48306938',
    'basePrice': 900,
    'isFavorite': false,
    'offers': [
      '6eb80fa3-6cf4-4469-b852-0e6b08274991',
      '0eb34657-77f7-4a8b-bf26-6a92e4b5ec34',
      '3cb35270-950d-4311-a6fe-41143b510536'
    ]
  },
  {
    'id': 'dcca3787-522c-4e8b-8847-105b1164bb34',
    'type': 'sightseeing',
    'dateFrom': '2023-12-25T19:11:54.900Z',
    'dateTo': '2023-12-26T18:29:39.357Z',
    'destination': 'e4d03396-702f-44c8-988d-342736b43f5d',
    'basePrice': 900,
    'isFavorite': false,
    'offers': []
  },
  {
    'id': '77ed34dd-2e6d-4e1f-bc77-5b0838878db6',
    'type': 'check-in',
    'dateFrom': '2023-12-26T18:29:39.357Z',
    'dateTo': '2023-12-27T14:56:05.424Z',
    'destination': '66ea0601-0940-47c6-8c79-5811b4062837',
    'basePrice': 600,
    'isFavorite': false,
    'offers': [
      '59ec0894-8185-4f11-8018-86824b1c5eb1',
      '5e850bd8-2372-430d-b748-d1d6f33679d5'
    ]
  }
];

