import repository from "../repository";

function findMany() {
  return repository.redis.role.findMany();
}

function findOne(id) {
    let role = repository.redis.role.findOne(id)
    if(!role) {
        role = repository.postgres.role.findOne(id)
    }
    return repository.redis.role.findOne(id);
}
