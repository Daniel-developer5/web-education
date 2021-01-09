enum Membership {
    Simple,
    Standart,
    Premium,
}

const membership = Membership.Standart
console.log(membership)  // 1, cause Simple = 0, Standart = 1

const membershipReverse = Membership[2]
console.log(membershipReverse) // Premium

enum SocialMedia {
    VK = 'VK',
    FaceBook = 'facebook',
}

const social = SocialMedia.FaceBook
console.log(social) // facebook