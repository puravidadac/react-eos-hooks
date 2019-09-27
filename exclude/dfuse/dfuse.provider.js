"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const dfuse_config_context_1 = require("./dfuse-config.context");
function DfuseProvider({ apiKey, network, children }) {
    return react_1.default.createElement(dfuse_config_context_1.DfuseConfigContext.Provider, { value: { apiKey, network } }, children);
}
exports.default = DfuseProvider;
//# sourceMappingURL=dfuse.provider.js.map