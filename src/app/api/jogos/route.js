import { NextResponse } from 'next/server';

// Inicializando a lista de jogos
let games = [
    {
        id: 1,
        name: "Baldur's Gate 3",
        nota: 4.4,
        linguagem: "English (audio, text)",
        descricao_breve: "Em Baldur's Gate 3, os jogadores assumem o papel de um personagem...",
        price: 199.99,
        descricao: "Gather your party, and return to the Forgotten Realms...",
        minimo: {
            system: "Windows 10 64-bit",
            Processor: "Intel I5 4690 / AMD FX 8350",
            Memory: "8 GB RAM",
            Graphics: "Nvidia GTX 970 / RX 480 (4GB+ of VRAM)",
            DirectX: "Version 11",
            Storage: "150 GB available space",
            Other: "SSD required"
        },
        recomendado: {
            system: "Windows 10 64-bit",
            Processor: "Intel i7 8700K / AMD R5 3600",
            Memory: "16 GB RAM",
            Graphics: "Nvidia 2060 Super / RX 5700 XT (8GB+ of VRAM)",
            DirectX: "Version 11",
            Storage: "150 GB available space",
            Other: "SSD required"
        }
    }
    // Adicione mais jogos conforme necessário
];

const API_KEY = "5c9096f394604df78773f0ae90827f33"; // Coloque sua chave da API aqui

// Função auxiliar para buscar imagens de jogos
async function fetchGameData(gameName) {
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=1&search=${encodeURIComponent(gameName)}`);
    if (!response.ok) throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    return await response.json();
}

// Função auxiliar para buscar screenshots
async function fetchScreenshots(gameId) {
    const screenshotsResponse = await fetch(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${API_KEY}`);
    if (!screenshotsResponse.ok) throw new Error(`Erro ao buscar screenshots: ${screenshotsResponse.statusText}`);
    const screenshotsData = await screenshotsResponse.json();
    return screenshotsData.results.map(screenshot => screenshot.image);
}

// Função GET para retornar a lista de jogos
export async function GET() {
    try {
        const gamesWithImages = await Promise.all(
            games.map(async (game) => {
                const data = await fetchGameData(game.name);
                const gameData = data.results[0];

                // Pega a imagem de capa (background_image)
                const imageUrl = gameData?.background_image || null;

                // Busca as screenshots
                const screenshots = await fetchScreenshots(gameData.id);

                return {
                    ...game,
                    imageUrl,
                    screenshots
                };
            })
        );

        return NextResponse.json(gamesWithImages);
    } catch (error) {
        console.error("Erro na API:", error);
        return NextResponse.json({ error: "Erro ao buscar jogos." }, { status: 500 });
    }
}

// Função POST para adicionar um novo jogo
export async function POST(req) {
    try {
        const novoJogo = await req.json();

        // Validação básica dos dados
        if (!novoJogo.name || !novoJogo.price) {
            return NextResponse.json({ error: "Nome e preço são obrigatórios." }, { status: 400 });
        }

        novoJogo.id = games.length + 1; // Atribui um novo ID ao jogo
        games.push(novoJogo);
        return NextResponse.json(novoJogo, { status: 201 });
    } catch (error) {
        console.error("Erro ao adicionar jogo:", error);
        return NextResponse.json({ error: "Erro ao adicionar jogo." }, { status: 400 });
    }
}
