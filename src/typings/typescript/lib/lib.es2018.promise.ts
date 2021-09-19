
    export default [
      "typescript\\lib\\lib.es2018.promise.d.ts",
      "/// <reference no-default-lib=\"true\"/>\r\n/**\r * Represents the completion of an asynchronous operation\r */interface Promise<T>{/**\r * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The\r * resolved value cannot be modified from the callback.\r * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).\r * @returns A Promise for the completion of the callback.\r */finally(onfinally?:(()=>void)|undefined|null):Promise<T>}"
    ]
  