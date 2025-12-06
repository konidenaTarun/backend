function getUserDetails(id,getUserSubjects){
    console.log("getting user details by userId" , id)
    getUserSubjects({Userroll : "678"})
};
function getUserSubjects(UserRoll , getUserMarks){
    console.log("Getting users subject by roll number " , UserRoll);
    getUserMarks({subid : "en-1"})
}
function getUserMarks(userSubId) {
    console.log("getting user marks with subid" , userSubId)
}
getUserDetails("123" , function(UserRoll){
    getUserSubjects(UserRoll , function (userSubId) {
        getUserMarks(userSubId)
    })
});
