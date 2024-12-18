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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
// Function to parse the barcode into IDs
function parseBarcode(barcode) {
    if (barcode.length !== 8)
        throw new Error('Invalid barcode length');
    return {
        categoryId: parseInt(barcode.slice(0, 2)),
        styleId: parseInt(barcode.slice(2, 4)),
        sizeId: parseInt(barcode.slice(4, 6)),
        genderId: parseInt(barcode.slice(6, 8)),
    };
}
// Main function to test the backend and database queries
function testDatabase(barcode) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, categoryId, styleId, sizeId, genderId, _b, category, style, size, gender, inventory, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, 3, 5]);
                    _a = parseBarcode(barcode), categoryId = _a.categoryId, styleId = _a.styleId, sizeId = _a.sizeId, genderId = _a.genderId;
                    return [4 /*yield*/, Promise.all([
                            prisma.itemCategory.findUnique({ where: { id: categoryId } }),
                            prisma.itemStyle.findUnique({ where: { id: styleId } }),
                            prisma.size.findUnique({ where: { id: sizeId } }),
                            prisma.gender.findUnique({ where: { id: genderId } }),
                            prisma.inventory.findUnique({ where: { barcode: barcode } })
                        ])];
                case 1:
                    _b = _c.sent(), category = _b[0], style = _b[1], size = _b[2], gender = _b[3], inventory = _b[4];
                    // Check if any records are missing
                    if (!category || !style || !size || !gender || !barcode) {
                        console.error('One or more records not found');
                        return [2 /*return*/];
                    }
                    // Log the combined result
                    console.log('Inventory Details:');
                    console.log("Barcode: ".concat(barcode));
                    console.log("Category: ".concat(category.name));
                    console.log("Style: ".concat(style.name));
                    console.log("Size: ".concat(size.sizeCode));
                    console.log("Gender: ".concat(gender.name));
                    console.log("Quantity: ".concat(inventory.quantity));
                    return [3 /*break*/, 5];
                case 2:
                    error_1 = _c.sent();
                    console.error('Error:', error_1.message);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, prisma.$disconnect()];
                case 4:
                    _c.sent();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// Run the test function with a sample barcode
testDatabase('01010101');
