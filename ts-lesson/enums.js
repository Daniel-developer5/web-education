var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
console.log(membership); // 1, cause Simple = 0, Standart = 1
var membershipReverse = Membership[2];
console.log(membershipReverse); // Premium
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FaceBook"] = "facebook";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.FaceBook;
console.log(social);
