export default function GroupExample({group, iterable, result, mapKey = null}){
    
  function replacer(key, value) {
    if(value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }
  
    const printIterable = JSON.stringify(iterable, null, 2);
    const printResults = result instanceof Map ?  JSON.stringify(result, replacer, 2): JSON.stringify(result, null, 2);
    const printGet = result instanceof Map ? JSON.stringify(result.get(mapKey), replacer, 2) : false;
    return (
        <div>
        <pre>{group ? printResults: printIterable}</pre>
        {group && printGet && <pre>{printGet}</pre>}
        </div>
    )
}