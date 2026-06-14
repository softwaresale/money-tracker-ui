import { GeneratorConfig } from "ng-openapi";
import { HttpResourcePlugin } from '@ng-openapi/http-resource';

const config = {
    input: "../money-tracker-api/api/money-tracker-api.yml",
    output: "./libs/api-client",
    options: {
        dateType: "Date",
        enumStyle: "enum",
    },
    plugins: [HttpResourcePlugin]
} satisfies GeneratorConfig;

export default config;