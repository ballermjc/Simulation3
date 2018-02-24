UPDATE Users 
SET FirstName = $2, 
    LastName = $3, 
    Gender = $4, 
    HairColor = $5, 
    EyeColor = $6,
    Hobby = $7,
    BirthdayDay = $8,
    BirthdayMonth = $9,
    BirthdayYear = $10
WHERE UserID = $1;

