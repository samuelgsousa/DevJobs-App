UPDATE vagas SET nome_empresa = CASE
WHEN id = 1 THEN 'Marketing S&A'
WHEN id = 2 THEN 'Pashion 4 Fashion'
WHEN id = 3 THEN 'MoneyBank'
WHEN id = 4 THEN 'Tech Solutions Ltda'
WHEN id = 5 THEN 'WebMaster Inc'
WHEN id = 6 THEN 'Digital Innovations SA'
WHEN id = 7 THEN 'CodeCrafters Ltda'
WHEN id = 8 THEN 'CyberTech Solutions'
WHEN id = 9 THEN 'DataDriven Solutions Inc'
WHEN id = 10 THEN 'CloudNine Technologies'
WHEN id = 11 THEN 'ByteWorks Ltda'
WHEN id = 12 THEN 'InnovateTech Corporation'
WHEN id = 13 THEN 'CodeNinjas Inc'
WHEN id = 14 THEN 'WebWizards Ltda'
WHEN id = 15 THEN 'FutureTech Innovations SA'
WHEN id = 16 THEN 'DataSavvy Solutions Inc'
    

END WHERE id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);