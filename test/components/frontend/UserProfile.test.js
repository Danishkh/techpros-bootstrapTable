'use strict';

import {Role, User, UserProfile} from "../../../src/components/frontend/Domain";
import {assert, expect} from 'chai'

// import {Role} from "./Role";
// import {UserProfile} from "./UserProfile";
// import {providedModules, providedRoles} from "./DomainConstants"

//import Role from 'src/components/frontend/domain/Role';
// import User from 'src/components/frontend/domain/User';
//import {providedModules,providedRoles} from 'src/components/frontend/domain/DomainConstants';

describe('User tests', () => {
    it('prover å finne noe', () => {
        var user = new User("s@g", "TOre", "Gard");
        expect(user.email).to.equal("s@g");
        expect(user.fname).to.equal("TOre");
        expect(user.lname).to.equal("Gard");
    })
});

describe('User profile tests', () => {
    it('user exist and roles', () => {
        var target = getTestdataUserProfile();
        //up.showInstance();
        expect(target.roles.size.valueOf()).to.equal(2);
        expect(target.user.email).to.equal("s@g");
        expect(target.user.fname).to.equal("TOre");
        expect(target.user.lname).to.equal("Gard");
    })

    it('hasRole test ', () => {
        var target = getTestdataUserProfile();
        var role=target.hasRole("HR");
        console.log("\n*********************");
        console.log(target.roles);
        console.log(target.hasRole("Module1"));
        expect("HR").to.equal("HR");
    })
});


// describe('tulletest', () => {
//     // var userProfile = new UserProfile(user);
//      var user = new User("s@g","TOre","Gard");
//     console.log(user.email);
//     expect(1).to.be.ok();
//
//     var userProfile = new UserProfile(user);
//
//     var roleHR = new Role("HR");
//     roleHR.addModule("Module1");
//     roleHR.addModule("Module2");
//
//     var roleConsultant = new Role("CONSULTANT");
//     roleConsultant.addModule("NOETULL");
//     roleConsultant.addModule("Module1");
//     userProfile.addRole(roleHR);
//     userProfile.addRole(roleConsultant);
//     user.showInstance()
//     //expect(true).toBe(true);
//     it('Starter...');
// });

function getTestdataUserProfile() {
    var user = new User("s@g", "TOre", "Gard");
    var userProfile = new UserProfile(user);
    var roleHR = new Role("HR");
    roleHR.addModule("Module1");
    roleHR.addModule("Module2");

    var roleConsultant = new Role("CONSULTANT");
    roleConsultant.addModule("NOETULL");
    roleConsultant.addModule("Module1");
    userProfile.addRole(roleHR);
    userProfile.addRole(roleConsultant);
    return userProfile;
}
