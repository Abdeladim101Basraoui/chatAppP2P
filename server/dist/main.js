"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const chat_module_1 = require("./chat.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(chat_module_1.ChatModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map