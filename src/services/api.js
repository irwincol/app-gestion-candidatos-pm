// permite conectar el backend con el frontent

const URL_BASE = "localhost:8080/" //url conectar a base de datos
    
export let end_points = {
    users: URL_BASE + "users",
    offert: URL_BASE + "offers",
    candidates: URL_BASE + "candidates"

}
