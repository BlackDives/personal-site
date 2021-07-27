var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React, { useEffect, useState } from "react";
import firebase from "gatsby-plugin-firebase";
export var UserContext = React.createContext({
    user: undefined,
    isLoading: true,
    userId: "",
});
export var UserProvider = function (_a) {
    var children = _a.children;
    return (React.createElement(UserContext.Provider, { value: __assign({}, useUser()) }, children));
};
function useUser() {
    var _a = __read(useState({
        user: undefined,
        isLoading: true,
    }), 2), _b = _a[0], user = _b.user, isLoading = _b.isLoading, setUser = _a[1];
    var _c = __read(useState(""), 2), userId = _c[0], setUserId = _c[1];
    useEffect(function () {
        firebase.auth().onAuthStateChanged(function (userAuth) {
            if (userAuth)
                setUserId(userAuth.uid);
        });
    }, []);
    useEffect(function () {
        var _a;
        if ((_a = firebase.auth().currentUser) === null || _a === void 0 ? void 0 : _a.uid) {
            setUserId(firebase.auth().currentUser.uid);
        }
    }, []);
    useEffect(function () {
        if (!userId)
            return;
        firebase
            .firestore()
            .collection("Users")
            .doc(userId)
            .onSnapshot(function (doc) {
            setUser({ user: doc.data(), isLoading: false });
        });
    }, [userId]);
    return {
        user: user,
        isLoading: isLoading,
        userId: userId,
    };
}
