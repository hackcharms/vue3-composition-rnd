export function decodeString(str: string) {
    const methods = str.split('|');
    return methods.map((method: string) => {
      const [methodName, paramString] = method.split(':');
      return (value: string) => availableMethods?.[methodName as keyof typeof availableMethods](value, paramString);
    });
  }
  const availableMethods = {
    min: function (value: string, param: number | string) {
      return value?.length >= Number(param) || `Length should be min ${param} long`;
    },
    in_array: function (value: string, params: Array<string | number>) {
      return params.includes(value) || `${value} is not a proper type ${params} are valid values`;
    },
  };
  