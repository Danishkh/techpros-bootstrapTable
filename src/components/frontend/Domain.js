'use strict';

class User {
    constructor(email, fname, lname) {
        this.email = email;
        this.fname = fname;
        this.lname = lname;
    }

    getEmail() {
        return this.email;
    }

    showInstance() {
        console.log("I'm a " + this.lname, this.fname + this.email);
    }
}

class Role {
    constructor(name) {
        this.name = name;
        this.modules = new Set();
    }

    hasModule(module) {
        return this.modules.has(module);
    }

    addModule(item) {
        this.modules.add(item);
    }

    removeModule(item) {
        this.modules.delete(item);
    }

    showInstance() {
        console.log("I'm a " + this.name, this.modules);
    }
}

class UserProfile {
    constructor(user) {
        this.user = user;
        this.roles = new Set();
    };

    canRenderModule(module) {
        this.roles.forEach(function (role) {
            if (role.hasModule(module)) return true;
            console.log(role);
        });
        return false;
    }

    addRole(role) {
        this.roles.add(role);
    }

    removeRole(role) {
        this.roles.delete(role);
    }

    showInstance() {
        console.log("I'm a " + this.user, this.roles);
    }

    hasRole(role) {
        return this.roles.has(role);
    }
}

export {User, Role, UserProfile}
