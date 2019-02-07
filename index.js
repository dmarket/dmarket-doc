const fs = require('fs')

const swagger = JSON.parse(fs.readFileSync('swagger.json'))

console.log(`# ${swagger.info.title}

${swagger.info.description}

${Object.keys(swagger.paths).map(path => Object.keys(swagger.paths[path]).map(method => `
{% api-method method="${method}" host="https://${swagger.host}" path="${path}" %}
{% api-method-summary %}
${swagger.paths[path][method].summary}
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
${swagger.paths[path][method].parameters && swagger.paths[path][method].parameters.filter(parameter => parameter.in === "path").map(parameter => 
`
{% api-method-parameter-description %}
${parameter.description === undefined ? "" : parameter.description}
{% endapi-method-parameter-description %}
{% api-method-parameter name="${parameter.name}" type="${parameter.type}" required=${Boolean(parameter.required)} %}
{% endapi-method-parameter %}
`
).join('\n')}
{% endapi-method-path-parameters %}
{% api-method-headers %}
${swagger.paths[path][method].parameters && swagger.paths[path][method].parameters.filter(parameter => parameter.in === "header").map(parameter => 
`
{% api-method-parameter-description %}
${parameter.description === undefined ? "" : parameter.description}
{% endapi-method-parameter-description %}
{% api-method-parameter name="${parameter.name}" type="${parameter.type}" required=${Boolean(parameter.required)} %}
{% endapi-method-parameter %}
`
).join('\n')}
{% endapi-method-headers %}
{% api-method-query-parameters %}
${swagger.paths[path][method].parameters && swagger.paths[path][method].parameters.filter(parameter => parameter.in === "query").map(parameter => 
`
{% api-method-parameter-description %}
${parameter.description === undefined ? "" : parameter.description}
{% endapi-method-parameter-description %}
{% api-method-parameter name="${parameter.name}" type="${parameter.type}" required=${Boolean(parameter.required)} %}
{% endapi-method-parameter %}
`
).join('\n')}
{% endapi-method-query-parameters %}
{% api-method-body-parameters %}

${swagger.paths[path][method].parameters && swagger.paths[path][method].parameters.filter(parameter => parameter.in === "body").map(parameter => 
`
{% api-method-parameter-description %}
${parameter.description === undefined ? "" : parameter.description}
{% endapi-method-parameter-description %}
{% api-method-parameter name="${parameter.name}" type="${parameter.type}" required=${Boolean(parameter.required)} %}
{% endapi-method-parameter %}
`
).join('\n')}
{% endapi-method-body-parameters %}
{% endapi-method-request %}
${Object.keys(swagger.paths[path][method].responses).map(code => `
{% api-method-response %}
{% api-method-response-example httpCode=${code} %}
{% api-method-response-example-description %}
${swagger.paths[path][method].responses[code].description == undefined ? "" : swagger.paths[path][method].responses[code].description}
{% endapi-method-response-example-description %}

\`\`\`javascript
${swagger.paths[path][method].responses[code].schema && JSON.stringify(swagger.definitions[swagger.paths[path][method].responses[code].schema.$ref.split('/')[swagger.paths[path][method].responses[code].schema.$ref.split('/').length - 1]], null, 2)}
\`\`\`
{% endapi-method-response-example %}
{% endapi-method-response %}
`).join('\n')}
{% endapi-method-spec %}
{% endapi-method %}
`).join('')).join('')}
`)
