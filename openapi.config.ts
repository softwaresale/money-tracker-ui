import { GeneratorConfig } from "ng-openapi";

const config: GeneratorConfig = {
    input: "../money-tracker-api/api/money-tracker-api.yml",
    output: "./libs/api-client",
    options: {
        dateType: "Date",
        enumStyle: "enum",
    },
};

export default config;