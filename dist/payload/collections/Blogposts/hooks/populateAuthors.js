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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
exports.populateAuthors = void 0;
// Function to validate authors array
function validateAuthors(authors) {
    return authors.every(function (author) {
        if (typeof author === 'string') {
            // Validate author ID (e.g., check length, format)
            return isValidAuthorId(author);
        }
        else if (typeof author === 'object' && author !== null) {
            // Validate author object structure (e.g., contains required properties)
            return isValidAuthorObject(author);
        }
        else {
            return false; // Invalid type
        }
    });
}
// Example validation functions
function isValidAuthorId(id) {
    // Implement validation logic for author ID
    return id.length === 24; // Example: Check if it's a valid MongoDB ObjectId
}
function isValidAuthorObject(author) {
    // Implement validation logic for author object
    return author.hasOwnProperty('id'); // Example: Check if it contains required properties
}
var populateAuthors = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var authorDocs, error_1;
    var doc = _b.doc, payload = _b.req.payload;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                if (!((doc === null || doc === void 0 ? void 0 : doc.authors) && validateAuthors(doc.authors))) return [3 /*break*/, 2];
                return [4 /*yield*/, Promise.all(doc.authors.map(function (author) { return __awaiter(void 0, void 0, void 0, function () {
                        var authorId, authorDoc, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    authorId = typeof author === 'object' ? author === null || author === void 0 ? void 0 : author.id : author;
                                    return [4 /*yield*/, payload.findByID({
                                            collection: 'users',
                                            id: authorId,
                                            depth: 0,
                                        })];
                                case 1:
                                    authorDoc = _a.sent();
                                    return [2 /*return*/, authorDoc];
                                case 2:
                                    error_2 = _a.sent();
                                    console.error('Error fetching author:', error_2);
                                    // Optionally handle the error, e.g., log it, set a default value, etc.
                                    return [2 /*return*/, null]; // Or any other default value
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 1:
                authorDocs = _c.sent();
                doc.populatedAuthors = authorDocs
                    .filter(function (authorDoc) { return authorDoc !== null; }) // Filter out null values
                    .map(function (authorDoc) { return ({
                    id: authorDoc.id,
                    name: authorDoc.name,
                }); });
                _c.label = 2;
            case 2: return [3 /*break*/, 4];
            case 3:
                error_1 = _c.sent();
                console.error('Error populating authors:', error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, doc];
        }
    });
}); };
exports.populateAuthors = populateAuthors;
