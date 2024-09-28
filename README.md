# react-hook-form-rules

This is a small library that contains a few rules for clearer validation handling in the [react-hook-form](https://www.react-hook-form.com/) library.

### Contacts

Hello everyone 👋. 

If you have any questions or suggestions, [my github profile](https://github.com/chopperqt). 



## Rules

### getRequiredRule

#### Description
This rule makes the field required.

#### Options
| Option  | Type | Default | Description  |
| -------- | --------- | ------ | ----------  |
| isRequired | boolean | true  |  |
| message | string | "This field is required." |  . |

#### Code example
```
import { getRequiredRule } from 'react-hook-form-rules';

const {...} = useController({
  rules: {{ 
    required: getRequiredRule()
  }}
})

```





### getRequiredArrayRule

#### Description
This rule makes the array field required.


#### Options
| Option  | Type | Default | Description  |
| -------- | --------- | ------ | ----------  |
| arr | array | []  |  |
| message | string | "This field is required." |   |


#### Code example
```
import { getRequiredArrayRule } from 'react-hook-form-rules';

const {...} = useController({
  rules: {{ 
    validate: (arr) => getRequiredArrayRule(arr)
  }}
})
```





### getRequiredObjectRule

#### Description
This rule makes the object field required.


#### Options
| Option  | Type | Default | Description  |
| -------- | --------- | ------ | ----------  |
| obj | object | {}  |  |
| message | string | "This field is required." |   |


#### Code example
```
import { getRequiredObjectRule } from 'react-hook-form-rules';

const {...} = useController({
  rules: {{ 
    validate: (arr) => getRequiredObjectRule(arr)
  }}
})
```




### getMaxRule

#### Description
This rule returns an error if the number is greater than the specified value.

#### Options
| Option  | Type | Default | Description  |
| -------- | --------- | ------ | ----------  |
| max | number | -  | - |
| message | string | - |  - |

#### Code example
```
import { getMaxRule } from 'react-hook-form-rules';

const {...} = useController({
  rules: {{ 
    max: getMaxRule(15)
  }}
})
```




### getMaxLengthRule

#### Description
This rule checks that the number of characters in the string does not exceed the specified value.

#### Options
| Option  | Type | Default | Description  |
| -------- | --------- | ------ | ----------  |
| maxLength | number | -  | - |
| message | string | - |  - |

### Code example
```
import { getMaxLengthRule } from 'react-hook-form-rules';

const {...} = useController({
  rules: {{ 
    maxLength: getMaxLengthRule(15)
  }}
})
```





### getMaxArrayLengthRule

#### Description
This rule returns an error if the number of values in the array exceeds the specified limit.

#### Options
| Option  | Type | Default | Description  |
| -------- | --------- | ------ | ----------  |
| arr | arrray | -  | - |
| maxLength | number | -  | - |
| message | string | - |  - |

#### Code example
```
import { getMaxArrayLengthRule } from 'react-hook-form-rules';

const {...} = useController({
  rules: {{ 
    validate: (arr) =>  getMaxArrayLengthRule(arr, 15)
  }}
})
```



### getMinRule

#### Description
This rule checks that the string contains a minimum number of characters.

#### Options
| Option  | Type | Default | Description  |
| -------- | --------- | ------ | ----------  |
| min | number | -  | - |
| message | string | - |  - |

#### Code example
```
import { getMinRule } from 'react-hook-form-rules';

const {...} = useController({
  rules: {{ 
    min: getMinRule(15)
  }}
})
```




### getMinLengthRule

#### Description
The rule checks that the string contains at least the specified number of characters.

#### Options
| Option  | Type | Default | Description  |
| -------- | --------- | ------ | ----------  |
| minLength | number | -  | - |
| message | string | - |  - |

#### Code example
```
import { getMinLengthRule } from 'react-hook-form-rules';

const {...} = useController({
  rules: {{ 
    minLength: getMinLengthRule(15)
  }}
})
```




### getMinArrayLengthRule

#### Description
The rule checks that the array contains a minimum number of elements.

#### Options
| Option  | Type | Default | Description  |
| -------- | --------- | ------ | ----------  |
| arr | arrray | -  | - |
| minLength | number | -  | - |
| message | string | - |  - |

#### Code example
```
import { getMinArrayLengthRule } from 'react-hook-form-rules';

const {...} = useController({
  rules: {{ 
    validate: (arr) =>  getMinArrayLengthRule(arr, 15)
  }}
})
```

### getEmailRule

#### Description
he rule checks the entered email for correctness.

#### Options
| Option  | Type | Default | Description  |
| -------- | --------- | ------ | ----------  |
| pattern | RegExp | -  | - |
| message | string | - |  - |

#### Code example
```
import { getEmailRule } from 'react-hook-form-rules';

const {...} = useController({
  rules: {{ 
    pattern: getEmailRule({})
  }}
})
```




### getUrlRule

#### Description
The rule checks the entered URL for correctness.

#### Options
| Option  | Type | Default | Description  |
| -------- | --------- | ------ | ----------  |
| pattern | RegExp | -  | - |
| message | string | - |  - |

#### Code example
```
import { getUrlRule } from 'react-hook-form-rules';

const {...} = useController({
  rules: {{ 
    pattern: getUrlRule({})
  }}
})
```




