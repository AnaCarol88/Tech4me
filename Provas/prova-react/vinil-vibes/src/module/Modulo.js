
const fetchDiscos = async () => {
    try {
        const response = await fetch('http://localhost:3000/discos');

        if (!response.ok) {
            throw new Error('Falha na requisição');
        }

        const data = await response.json();
        return data;


    } catch (error) {
        console.error('Erro ao buscar discos:', error);
        throw error;
    }


};

export default fetchDiscos;



//   if (data.length >= 90) {
//     return data.slice(89, 90);
//   } else {
//     throw new Error('Produto não encontrado na posição especificada');
//   }