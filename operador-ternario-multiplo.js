let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponiveis > 0) ? "reserva confirmada" 
                  : (quartosDisponiveis > 0 ) ? "agurdando confirmacao"
                  : "sem quartos disponiveis";
console.log(statusReserva); //saida; "reserva confirmada"