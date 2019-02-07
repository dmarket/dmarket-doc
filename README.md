# Dmarket trading

Resource for managing tradings


{% api-method method="get" host="https://dmarket.com" path="/account/v1/user/balance" %}
{% api-method-summary %}
Returns user's balance by it's token.
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "dmc",
    "usd",
    "dmcAvailableToWithdraw",
    "usdAvailableToWithdraw"
  ],
  "properties": {
    "dmc": {
      "type": "string"
    },
    "dmcAvailableToWithdraw": {
      "type": "string"
    },
    "usd": {
      "type": "string"
    },
    "usdAvailableToWithdraw": {
      "type": "string"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Not found
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "dmc",
    "usd",
    "dmcAvailableToWithdraw",
    "usdAvailableToWithdraw"
  ],
  "properties": {
    "dmc": {
      "type": "string"
    },
    "dmcAvailableToWithdraw": {
      "type": "string"
    },
    "usd": {
      "type": "string"
    },
    "usdAvailableToWithdraw": {
      "type": "string"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/game/v1/games" %}
{% api-method-summary %}
Returns list of all available games.
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
undefined
{% endapi-method-path-parameters %}
{% api-method-headers %}
undefined
{% endapi-method-headers %}
{% api-method-query-parameters %}
undefined
{% endapi-method-query-parameters %}
{% api-method-body-parameters %}

undefined
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.GameRepresentation"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.GameRepresentation"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/offers-search/v1/aggregated-class/{classId}/sell-offers" %}
{% api-method-summary %}
Get active offers info by classID
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% api-method-parameter-description %}
Class identifier (with slug support) can be found in /offers-search/v1/search endpoint
{% endapi-method-parameter-description %}
{% api-method-parameter name="classId" type="string" required=true %}
{% endapi-method-parameter %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% api-method-parameter-description %}
limit
{% endapi-method-parameter-description %}
{% api-method-parameter name="limit" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
offset
{% endapi-method-parameter-description %}
{% api-method-parameter name="offset" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
USD|DMC
{% endapi-method-parameter-description %}
{% api-method-parameter name="currency" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderBy
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderBy" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderDir
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderDir" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
status
{% endapi-method-parameter-description %}
{% api-method-parameter name="status" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
tradable|non-tradable|all
{% endapi-method-parameter-description %}
{% api-method-parameter name="tradability" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.SellOffersListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Not found
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.SellOffersListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/offers-search/v1/search" %}
{% api-method-summary %}
Search aggregated active offers by gameID
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% api-method-parameter-description %}
limit
{% endapi-method-parameter-description %}
{% api-method-parameter name="limit" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
offset
{% endapi-method-parameter-description %}
{% api-method-parameter name="offset" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderBy
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderBy" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderDir
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderDir" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
category
{% endapi-method-parameter-description %}
{% api-method-parameter name="category" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
title
{% endapi-method-parameter-description %}
{% api-method-parameter name="title" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
filter
{% endapi-method-parameter-description %}
{% api-method-parameter name="filter" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
minimal offer count in agg classes
{% endapi-method-parameter-description %}
{% api-method-parameter name="minOfferCount" type="integer" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
enable if want get all offers without existing exteriors filter
{% endapi-method-parameter-description %}
{% api-method-parameter name="notPainted" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
gameId
{% endapi-method-parameter-description %}
{% api-method-parameter name="gameId" type="string" required=true %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
currency
{% endapi-method-parameter-description %}
{% api-method-parameter name="currency" type="string" required=true %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
priceFrom
{% endapi-method-parameter-description %}
{% api-method-parameter name="priceFrom" type="integer" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
priceTo
{% endapi-method-parameter-description %}
{% api-method-parameter name="priceTo" type="integer" required=false %}
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total",
    "totalOffers",
    "minOfferPrice",
    "maxOfferPrice",
    "minPrice",
    "maxPrice"
  ],
  "properties": {
    "maxOfferPrice": {
      "$ref": "#/definitions/representation.Money"
    },
    "maxPrice": {
      "type": "string"
    },
    "minOfferPrice": {
      "$ref": "#/definitions/representation.Money"
    },
    "minPrice": {
      "type": "string"
    },
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AggregatedClassesListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    },
    "totalOffers": {
      "type": "integer",
      "format": "int64"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Bad request
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Not found
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total",
    "totalOffers",
    "minOfferPrice",
    "maxOfferPrice",
    "minPrice",
    "maxPrice"
  ],
  "properties": {
    "maxOfferPrice": {
      "$ref": "#/definitions/representation.Money"
    },
    "maxPrice": {
      "type": "string"
    },
    "minOfferPrice": {
      "$ref": "#/definitions/representation.Money"
    },
    "minPrice": {
      "type": "string"
    },
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AggregatedClassesListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    },
    "totalOffers": {
      "type": "integer",
      "format": "int64"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/offers-search/v1/search/available-items" %}
{% api-method-summary %}
Search aggregated active offers by title
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% api-method-parameter-description %}
limit
{% endapi-method-parameter-description %}
{% api-method-parameter name="limit" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
offset
{% endapi-method-parameter-description %}
{% api-method-parameter name="offset" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderBy
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderBy" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderDir
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderDir" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
title
{% endapi-method-parameter-description %}
{% api-method-parameter name="title" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "games"
  ],
  "properties": {
    "games": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.GameItem"
      }
    },
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AvailableItem"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Bad request
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Not found
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "games"
  ],
  "properties": {
    "games": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.GameItem"
      }
    },
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AvailableItem"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/offers-search/v1/user/sell-offers" %}
{% api-method-summary %}
Get your active sell offers
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% api-method-parameter-description %}
limit
{% endapi-method-parameter-description %}
{% api-method-parameter name="limit" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
offset
{% endapi-method-parameter-description %}
{% api-method-parameter name="offset" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
status separated by comma
{% endapi-method-parameter-description %}
{% api-method-parameter name="status" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderBy
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderBy" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderDir
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderDir" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Game ID
{% endapi-method-parameter-description %}
{% api-method-parameter name="gameId" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Filter
{% endapi-method-parameter-description %}
{% api-method-parameter name="q" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.UserSellOffersListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Bad request
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Not found
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.UserSellOffersListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/offers/v1/search" %}
{% api-method-summary %}
Search aggregated active offers by gameID
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% api-method-parameter-description %}
limit
{% endapi-method-parameter-description %}
{% api-method-parameter name="limit" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
offset
{% endapi-method-parameter-description %}
{% api-method-parameter name="offset" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderBy
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderBy" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderDir
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderDir" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
category
{% endapi-method-parameter-description %}
{% api-method-parameter name="category" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
title
{% endapi-method-parameter-description %}
{% api-method-parameter name="title" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
filter
{% endapi-method-parameter-description %}
{% api-method-parameter name="filter" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
minimal offer count in agg classes
{% endapi-method-parameter-description %}
{% api-method-parameter name="minOfferCount" type="integer" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
enable if want get all offers without existing exteriors filter
{% endapi-method-parameter-description %}
{% api-method-parameter name="notPainted" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
gameId
{% endapi-method-parameter-description %}
{% api-method-parameter name="gameId" type="string" required=true %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
USD|DMC
{% endapi-method-parameter-description %}
{% api-method-parameter name="currency" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
priceFrom
{% endapi-method-parameter-description %}
{% api-method-parameter name="priceFrom" type="integer" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
priceTo
{% endapi-method-parameter-description %}
{% api-method-parameter name="priceTo" type="integer" required=false %}
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total",
    "totalOffers",
    "minOfferPrice",
    "maxOfferPrice",
    "minPrice",
    "maxPrice"
  ],
  "properties": {
    "maxOfferPrice": {
      "$ref": "#/definitions/representation.Money"
    },
    "maxPrice": {
      "type": "string"
    },
    "minOfferPrice": {
      "$ref": "#/definitions/representation.Money"
    },
    "minPrice": {
      "type": "string"
    },
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AggregatedClassesListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    },
    "totalOffers": {
      "type": "integer",
      "format": "int64"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Bad request
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Not found
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total",
    "totalOffers",
    "minOfferPrice",
    "maxOfferPrice",
    "minPrice",
    "maxPrice"
  ],
  "properties": {
    "maxOfferPrice": {
      "$ref": "#/definitions/representation.Money"
    },
    "maxPrice": {
      "type": "string"
    },
    "minOfferPrice": {
      "$ref": "#/definitions/representation.Money"
    },
    "minPrice": {
      "type": "string"
    },
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AggregatedClassesListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    },
    "totalOffers": {
      "type": "integer",
      "format": "int64"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/offers/v1/search/aggregated-class/{classId}/sell-offers" %}
{% api-method-summary %}
Get active offers info by classID
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% api-method-parameter-description %}
Class identifier (with slug support) can be found in /offers/v1/search endpoint
{% endapi-method-parameter-description %}
{% api-method-parameter name="classId" type="string" required=true %}
{% endapi-method-parameter %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% api-method-parameter-description %}
limit
{% endapi-method-parameter-description %}
{% api-method-parameter name="limit" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
offset
{% endapi-method-parameter-description %}
{% api-method-parameter name="offset" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
currency
{% endapi-method-parameter-description %}
{% api-method-parameter name="currency" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderBy
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderBy" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderDir
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderDir" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
status
{% endapi-method-parameter-description %}
{% api-method-parameter name="status" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
tradable|non-tradable|all
{% endapi-method-parameter-description %}
{% api-method-parameter name="tradability" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.SellOffersListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Not found
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.SellOffersListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/offers/v1/search/available-items" %}
{% api-method-summary %}
Search aggregated active offers by title
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% api-method-parameter-description %}
limit
{% endapi-method-parameter-description %}
{% api-method-parameter name="limit" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
offset
{% endapi-method-parameter-description %}
{% api-method-parameter name="offset" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderBy
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderBy" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderDir
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderDir" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
title
{% endapi-method-parameter-description %}
{% api-method-parameter name="title" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "games"
  ],
  "properties": {
    "games": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.GameItem"
      }
    },
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AvailableItem"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Bad request
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Not found
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "games"
  ],
  "properties": {
    "games": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.GameItem"
      }
    },
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AvailableItem"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/offers/v1/search/user/sell-offers" %}
{% api-method-summary %}
Get your active sell offers
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% api-method-parameter-description %}
limit
{% endapi-method-parameter-description %}
{% api-method-parameter name="limit" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
offset
{% endapi-method-parameter-description %}
{% api-method-parameter name="offset" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
status separated by comma
{% endapi-method-parameter-description %}
{% api-method-parameter name="status" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderBy
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderBy" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
orderDir
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderDir" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Game ID
{% endapi-method-parameter-description %}
{% api-method-parameter name="gameId" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Filter
{% endapi-method-parameter-description %}
{% api-method-parameter name="q" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.UserSellOffersListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Bad request
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Not found
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.UserSellOffersListItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://dmarket.com" path="/trading/v1/buy/offers" %}
{% api-method-summary %}
Buy sell offers from DMarket
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.BuyOfferTradingResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.BuyOfferTradingResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://dmarket.com" path="/trading/v1/export" %}
{% api-method-summary %}
Withdraw items from your DMarket account. Items will be sent to the specified trade url in your account settings on DMarket
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "OperationID",
    "SteamTradeID",
    "State",
    "Assets",
    "ErrorMessage"
  ],
  "properties": {
    "Assets": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ExportedItem"
      }
    },
    "ErrorMessage": {
      "description": "Export operation last error message. Can be empty",
      "type": "string"
    },
    "OperationID": {
      "description": "Unique ID of export operation",
      "type": "string"
    },
    "State": {
      "description": "Trade state",
      "type": "string",
      "enum": [
        "Created",
        "WaitingForCreationTrade",
        "WaitingForAcceptance",
        "Accepted",
        "Failed",
        "Error",
        "Closed",
        "Deleted"
      ]
    },
    "SteamTradeID": {
      "description": "ID of created trade offer on Steam, can be empty if trade was not created",
      "type": "string"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "OperationID",
    "SteamTradeID",
    "State",
    "Assets",
    "ErrorMessage"
  ],
  "properties": {
    "Assets": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ExportedItem"
      }
    },
    "ErrorMessage": {
      "description": "Export operation last error message. Can be empty",
      "type": "string"
    },
    "OperationID": {
      "description": "Unique ID of export operation",
      "type": "string"
    },
    "State": {
      "description": "Trade state",
      "type": "string",
      "enum": [
        "Created",
        "WaitingForCreationTrade",
        "WaitingForAcceptance",
        "Accepted",
        "Failed",
        "Error",
        "Closed",
        "Deleted"
      ]
    },
    "SteamTradeID": {
      "description": "ID of created trade offer on Steam, can be empty if trade was not created",
      "type": "string"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/trading/v1/export/operation/{OperationID}" %}
{% api-method-summary %}
Find exported item operation details by operation ID
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% api-method-parameter-description %}
Export operation ID
{% endapi-method-parameter-description %}
{% api-method-parameter name="OperationID" type="string" required=true %}
{% endapi-method-parameter %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "OperationID",
    "SteamTradeID",
    "State",
    "Assets",
    "ErrorMessage"
  ],
  "properties": {
    "Assets": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ExportedItem"
      }
    },
    "ErrorMessage": {
      "description": "Export operation last error message. Can be empty",
      "type": "string"
    },
    "OperationID": {
      "description": "Unique ID of export operation",
      "type": "string"
    },
    "State": {
      "description": "Trade state",
      "type": "string",
      "enum": [
        "Created",
        "WaitingForCreationTrade",
        "WaitingForAcceptance",
        "Accepted",
        "Failed",
        "Error",
        "Closed",
        "Deleted"
      ]
    },
    "SteamTradeID": {
      "description": "ID of created trade offer on Steam, can be empty if trade was not created",
      "type": "string"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "OperationID",
    "SteamTradeID",
    "State",
    "Assets",
    "ErrorMessage"
  ],
  "properties": {
    "Assets": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ExportedItem"
      }
    },
    "ErrorMessage": {
      "description": "Export operation last error message. Can be empty",
      "type": "string"
    },
    "OperationID": {
      "description": "Unique ID of export operation",
      "type": "string"
    },
    "State": {
      "description": "Trade state",
      "type": "string",
      "enum": [
        "Created",
        "WaitingForCreationTrade",
        "WaitingForAcceptance",
        "Accepted",
        "Failed",
        "Error",
        "Closed",
        "Deleted"
      ]
    },
    "SteamTradeID": {
      "description": "ID of created trade offer on Steam, can be empty if trade was not created",
      "type": "string"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://dmarket.com" path="/trading/v1/import" %}
{% api-method-summary %}
Import one or more Steam items into DMarket inventory, this operation will return a unique operation ID to track trade status
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "OperationID",
    "SteamTradeID",
    "SteamTradeState",
    "Items"
  ],
  "properties": {
    "Items": {
      "description": "List of items that was imported within this operation, each item contain DMarket asset ID and Steam skin identifiers",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ImportedSteamItem"
      }
    },
    "OperationID": {
      "description": "Unique ID of import operation",
      "type": "string"
    },
    "SteamTradeID": {
      "description": "ID of created trade offer on Steam, can be empty if trade was not created",
      "type": "string"
    },
    "SteamTradeState": {
      "type": "string",
      "enum": [
        "UnknownTradeState",
        "TradeOfferInvalid",
        "TradeOfferActive",
        "TradeOfferAccepted",
        "TradeOfferCountered",
        "TradeOfferExpired",
        "TradeOfferCanceled",
        "TradeOfferDeclined",
        "TradeOfferInvalidItems",
        "TradeOfferCreatedNeedsConfirmation",
        "TradeOfferCanceledBySecondFactor",
        "TradeOfferInEscrow",
        "ErrorDuringTradeCreateState"
      ]
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "OperationID",
    "SteamTradeID",
    "SteamTradeState",
    "Items"
  ],
  "properties": {
    "Items": {
      "description": "List of items that was imported within this operation, each item contain DMarket asset ID and Steam skin identifiers",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ImportedSteamItem"
      }
    },
    "OperationID": {
      "description": "Unique ID of import operation",
      "type": "string"
    },
    "SteamTradeID": {
      "description": "ID of created trade offer on Steam, can be empty if trade was not created",
      "type": "string"
    },
    "SteamTradeState": {
      "type": "string",
      "enum": [
        "UnknownTradeState",
        "TradeOfferInvalid",
        "TradeOfferActive",
        "TradeOfferAccepted",
        "TradeOfferCountered",
        "TradeOfferExpired",
        "TradeOfferCanceled",
        "TradeOfferDeclined",
        "TradeOfferInvalidItems",
        "TradeOfferCreatedNeedsConfirmation",
        "TradeOfferCanceledBySecondFactor",
        "TradeOfferInEscrow",
        "ErrorDuringTradeCreateState"
      ]
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/trading/v1/import/operation/{OperationID}" %}
{% api-method-summary %}
Allows you to find details of the imported item operation by unique ID
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% api-method-parameter-description %}
Import operation ID
{% endapi-method-parameter-description %}
{% api-method-parameter name="OperationID" type="string" required=true %}
{% endapi-method-parameter %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "OperationID",
    "SteamTradeID",
    "SteamTradeState",
    "Items"
  ],
  "properties": {
    "Items": {
      "description": "List of items that was imported within this operation, each item contain DMarket asset ID and Steam skin identifiers",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ImportedSteamItem"
      }
    },
    "OperationID": {
      "description": "Unique ID of import operation",
      "type": "string"
    },
    "SteamTradeID": {
      "description": "ID of created trade offer on Steam, can be empty if trade was not created",
      "type": "string"
    },
    "SteamTradeState": {
      "type": "string",
      "enum": [
        "UnknownTradeState",
        "TradeOfferInvalid",
        "TradeOfferActive",
        "TradeOfferAccepted",
        "TradeOfferCountered",
        "TradeOfferExpired",
        "TradeOfferCanceled",
        "TradeOfferDeclined",
        "TradeOfferInvalidItems",
        "TradeOfferCreatedNeedsConfirmation",
        "TradeOfferCanceledBySecondFactor",
        "TradeOfferInEscrow",
        "ErrorDuringTradeCreateState"
      ]
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "OperationID",
    "SteamTradeID",
    "SteamTradeState",
    "Items"
  ],
  "properties": {
    "Items": {
      "description": "List of items that was imported within this operation, each item contain DMarket asset ID and Steam skin identifiers",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ImportedSteamItem"
      }
    },
    "OperationID": {
      "description": "Unique ID of import operation",
      "type": "string"
    },
    "SteamTradeID": {
      "description": "ID of created trade offer on Steam, can be empty if trade was not created",
      "type": "string"
    },
    "SteamTradeState": {
      "type": "string",
      "enum": [
        "UnknownTradeState",
        "TradeOfferInvalid",
        "TradeOfferActive",
        "TradeOfferAccepted",
        "TradeOfferCountered",
        "TradeOfferExpired",
        "TradeOfferCanceled",
        "TradeOfferDeclined",
        "TradeOfferInvalidItems",
        "TradeOfferCreatedNeedsConfirmation",
        "TradeOfferCanceledBySecondFactor",
        "TradeOfferInEscrow",
        "ErrorDuringTradeCreateState"
      ]
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/trading/v1/inventory" %}
{% api-method-summary %}
Returns items are located on DMarket
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% api-method-parameter-description %}
Limit of list.
{% endapi-method-parameter-description %}
{% api-method-parameter name="limit" type="integer" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Offset of list.
{% endapi-method-parameter-description %}
{% api-method-parameter name="offset" type="integer" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Sorting field
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderBy" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
asc|desc
{% endapi-method-parameter-description %}
{% api-method-parameter name="orderDir" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Game ID
{% endapi-method-parameter-description %}
{% api-method-parameter name="gameId" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Custom filter to filter inventory by item name
{% endapi-method-parameter-description %}
{% api-method-parameter name="q" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.InventoryItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Not Found
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "objects",
    "total"
  ],
  "properties": {
    "objects": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.InventoryItem"
      }
    },
    "total": {
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://dmarket.com" path="/trading/v1/offers/cancel" %}
{% api-method-summary %}
Cancel one or more sell offers from the DMarket marketplace
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.OfferTradingResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.OfferTradingResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://dmarket.com" path="/trading/v1/offers/update-price" %}
{% api-method-summary %}
Update one or more sell offers prices
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.OfferTradingResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.OfferTradingResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="https://dmarket.com" path="/trading/v1/orders/change-price" %}
{% api-method-summary %}
Change price for existing buy order
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=204 %}
{% api-method-response-example-description %}
No content
{% endapi-method-response-example-description %}

```javascript
undefined
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Bad request
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Unauthorized
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://dmarket.com" path="/trading/v1/orders/create" %}
{% api-method-summary %}
Create new buy order
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
No content
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.CreateOrderResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Bad request
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Unauthorized
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}
No content
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.CreateOrderResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/trading/v1/orders/get-orders" %}
{% api-method-summary %}
get orders by filter
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% api-method-parameter-description %}
Sort data by status|price|title|date fields
{% endapi-method-parameter-description %}
{% api-method-parameter name="sortBy" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
asc|desc
{% endapi-method-parameter-description %}
{% api-method-parameter name="direction" type="string" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Show active orders
{% endapi-method-parameter-description %}
{% api-method-parameter name="active" type="boolean" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Show completed orders
{% endapi-method-parameter-description %}
{% api-method-parameter name="completed" type="boolean" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Limit items on page
{% endapi-method-parameter-description %}
{% api-method-parameter name="limit" type="number" required=false %}
{% endapi-method-parameter %}


{% api-method-parameter-description %}
Skip items
{% endapi-method-parameter-description %}
{% api-method-parameter name="offset" type="number" required=false %}
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=204 %}
{% api-method-response-example-description %}
No content
{% endapi-method-response-example-description %}

```javascript
undefined
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Bad request
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Unauthorized
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="https://dmarket.com" path="/trading/v1/orders/remove" %}
{% api-method-summary %}
Remove buy order for user
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=204 %}
{% api-method-response-example-description %}
No content
{% endapi-method-response-example-description %}

```javascript
undefined
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Bad Request
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Unauthorized
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Internal Server Error
{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://dmarket.com" path="/trading/v1/report/accounting/balance" %}
{% api-method-summary %}
Get user balance operations analytics by period of time. Deposits and withdraws
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items"
  ],
  "properties": {
    "Items": {
      "description": "Raw data",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AccountingReportItem"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items"
  ],
  "properties": {
    "Items": {
      "description": "Raw data",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AccountingReportItem"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://dmarket.com" path="/trading/v1/report/accounting/offers" %}
{% api-method-summary %}
Get user offers report about sell and buy offers by period of time
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items"
  ],
  "properties": {
    "Items": {
      "description": "Raw data",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AccountingReportItem"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items"
  ],
  "properties": {
    "Items": {
      "description": "Raw data",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.AccountingReportItem"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://dmarket.com" path="/trading/v1/report/export-operations" %}
{% api-method-summary %}
Get user export operation report with limit/offset pagination
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items"
  ],
  "properties": {
    "Items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ExportOperationsReportItem"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items"
  ],
  "properties": {
    "Items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ExportOperationsReportItem"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://dmarket.com" path="/trading/v1/report/import-operations" %}
{% api-method-summary %}
Get user import operation report with limit/offset pagination
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items"
  ],
  "properties": {
    "Items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ImportOperationResponse"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items"
  ],
  "properties": {
    "Items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.ImportOperationResponse"
      }
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://dmarket.com" path="/trading/v1/sell-offer" %}
{% api-method-summary %}
Put up for sale set of imported assets, this operation will return a unique sell offer ID for each asset
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% api-method-parameter-description %}

{% endapi-method-parameter-description %}
{% api-method-parameter name="body" type="undefined" required=true %}
{% endapi-method-parameter %}

{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.OfferTradingResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=409 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.OfferTradingResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://dmarket.com" path="/trading/v1/sell-offer/{SellOfferID}" %}
{% api-method-summary %}
Get sell offer details by ID
{% endapi-method-summary %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}

{% api-method-parameter-description %}
Sell offer ID
{% endapi-method-parameter-description %}
{% api-method-parameter name="SellOfferID" type="string" required=true %}
{% endapi-method-parameter %}

{% endapi-method-path-parameters %}
{% api-method-headers %}

{% api-method-parameter-description %}
Authorization token.
{% endapi-method-parameter-description %}
{% api-method-parameter name="Authorization" type="string" required=false %}
{% endapi-method-parameter %}

{% endapi-method-headers %}
{% api-method-query-parameters %}

{% endapi-method-query-parameters %}
{% api-method-body-parameters %}


{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.OfferTradingResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "message",
    "code"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "validationDetails": {
      "$ref": "#/definitions/api.ErrorRepresentation.validationDetails"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}


{% api-method-response %}
{% api-method-response-example httpCode=default %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "required": [
    "Items",
    "HasErrors",
    "TotalSucceed",
    "TotalFailed"
  ],
  "properties": {
    "HasErrors": {
      "description": "Indicates if there was errors during operation",
      "type": "boolean"
    },
    "Items": {
      "description": "List of offers which was affected by operation",
      "type": "array",
      "items": {
        "$ref": "#/definitions/representation.OfferTradingResponse"
      }
    },
    "TotalFailed": {
      "description": "Number of failed operations",
      "type": "integer",
      "format": "int32"
    },
    "TotalSucceed": {
      "description": "Number of successful operations",
      "type": "integer",
      "format": "int32"
    }
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}

{% endapi-method-spec %}
{% endapi-method %}


