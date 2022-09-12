// Sample UDF which returns the current datetime as an ISO8601 string.
function main(x) {
    return new Date().toISOString();
}