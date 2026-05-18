import { randomUUID } from "crypto";

export const pets = [
  {
    id: randomUUID(),
    nome: "Buddy",
    raca: "Golden Retriever",
    idade: 3,
    nomeTutor: "Alice"
    },
    {
    id: randomUUID(),
    nome: "Mittens",
    raca: "Siamese Cat",
    idade: 2,
    nomeTutor: "Bob"  
    },
    {
    id: randomUUID(),
    nome: "Rex",
    raca: "Beagle",
    idade: 4,   
    nomeTutor: "Charlie"
    }
];