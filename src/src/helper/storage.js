export function writeValue (status, name) {
    localStorage.setItem('status', status);
    localStorage.setItem('name', name);
}