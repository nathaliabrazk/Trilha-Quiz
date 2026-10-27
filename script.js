const quizzes = [
  { id: 'fundamentos', icon: '✳', title: 'Fundamentos da IA', category: 'COMECE AQUI', description: 'Entenda o que é inteligência artificial e como ela funciona.', questions: [
    { question: 'O que é inteligência artificial?', answers: ['Sistemas capazes de executar funções que tradicionalmente exigem habilidades humanas.', 'Uma ferramenta para organizar bancos de dados.', 'Um tipo de software para criação de jogos.', 'Um ramo da ciência focado somente em robótica.'], correct: 0, explanation: 'IA é um campo da computação que cria sistemas capazes de realizar tarefas como reconhecer padrões, gerar conteúdo ou fazer previsões.' },
    { question: 'Que tipo de IA se especializa na execução de tarefas específicas e é atualmente predominante?', answers: ['IA estreita (IA Fraca).', 'IA Geral (IA Geral).', 'Super IA (Super IA).', 'Inteligência Artificial Geral (AGI).'], correct: 0, explanation: 'A IA restrita, ou IA fraca, é projetada para executar tarefas específicas e é a forma mais comum e predominante de IA atualmente.' },
    { question: 'A inteligência artificial atual geralmente...', answers: ['É especializada em tarefas e pode cometer erros.', 'Tem consciência humana.', 'Sabe automaticamente tudo que acontece no mundo.', 'É sempre imparcial.'], correct: 0, explanation: 'A maioria dos sistemas atuais é especializada e pode produzir erros ou vieses.' },
    { question: 'Quais são as principais formas de classificação da IA?', answers: ['Devido às suas capacidades e funcionalidades.', 'Devido ao seu tamanho e custo.', 'A IA específica é mais rápida, a IA geral é mais lenta.', 'Devido à sua linguagem de programação e plataforma.'], correct: 0, explanation: 'O documento menciona que a IA pode ser classificada de acordo com suas capacidades (IA específica vc. IA geral) e de acordo com sua funcionalidade (preditiva, generativa, etc).' },
    { question: 'Qual a diferença fundamental entre IA Estreita e IA Geral?', answers: ['A IA específica requer muita energia, a IA geral não.', 'A IA específica concentra-se em tarefas específicas, enquanto a IA geral pode executar qualquer tarefa intelectual humana.', 'A IA específica é mais rápida, a IA geral é mais lenta.', 'A IA restrita é teórica, a IA geral é prática.'], correct: 1, explanation: 'O documento menciona que a IA pode ser classificada de acordo com suas capacidades (IA específica vc. IA geral) e de acordo com sua funcionalidade (preditiva, generativa, etc).' },
    { question: 'Qual é a característica definidora da era atual (2000 até o presente) na IA?', answers: ['A era do Big Data e do Aprendizado Profundo, a IA geral não.', 'A era da Inteligência Artificial Geral', 'A era do hardware especializado', 'A era da IA simbólica'], correct: 1, explanation: 'A disponibilidade massiva de dados (Big Data) e o desenvolvimento de redes neurais profundas (Deep Learning) têm sido cruciais para os avanços recentes em IA.' },
    { question: 'Qual funcionalidade de IA se concentra na criação de novo conteúdo a partir de exemplos anteriores?', answers: ['IA discriminativa', 'IA preditiva', 'IA analítica ', 'IA generativa'], correct: 3, explanation: 'A IA generativa se especializa na identificação de padrões em dados existentes para criar conteúdo novo e semelhante, como texto, imagens ou música.' },
    { question: 'Qual é o principal objetivo da IA preditiva?', answers: ['Classificar dados em diferentes categorias', 'Análise dados históricos para prever eventos futuros', 'Crie arte e música digital', 'Compreensão de comandos de voz complexos'], correct: 2, explanation: 'A IA preditiva utiliza dados históricos e análises estatísticas para fazer previsões sobre resultados ou eventos futuros.' },
    { question: 'O que faz a IA discriminativa?', answers: ['Classificar e distinguir entre diferentes categorias de dados.', 'Análise de padrões ocultos em grandes volumes de dados.', 'Ele prevê tendências de mercado.', 'Gera textos novos e criados'], correct: 0, explanation: ' A IA analítica processa grandes quantidades de dados para descobrir informações valiosas, padrões e tendências, concentrando-se na análise do passado (”olhando para trás”).' },
    { question: 'Qual abordagem da IA utiliza matemática e probabilidade para analisar dados e tirar conclusões?', answers: ['IA estatística.', 'IA analítica.', 'IA discriminativa.', 'IA generativa'], correct: 0, explanation: 'A IA estatística baseia-se em modelos matemáticose probabilísticos para analisar dados, fazer interferências e previsões, mesmo em situações de incerteza.' },
    { question: 'Que técnica a IA Estatística utiliza para encontrar relações entre variáveis e prever um resultado?', answers: ['Regressão.', 'Classificação.', 'Análise Bayesiana.', 'Teste de hipóteses'], correct: 0, explanation: 'A regressão é uma técnica usada pela IA estatística para modelar e prever a relação entre variáveis, como prever vendas com base em publicidade.' },
    { question: 'Como os diferentes tipos de IA são combinados nos sitemas atuais?', answers: ['Um sistema só pode usar um tipo de IA.', 'Os sistemas atuais utilizam apenas IA estatística.', 'Os sistemas atuais são geralmente de IA estreita que empregam uma ou mais abordagens funcionais (generativa, preditiva, discrimivativa).', 'A IA geral é a única que consegue combinar abordagens'], correct: 2, explanation: ' A maioria dos sostemas de IA atuais são de IA estreita e combinam diferentes abordagens funcionais para operar, como um assistente virtual que usa IA discriminativa para entender a voz e IA generativa para responder.' },
    { question: 'Qual é um dos mitos sobre a IA desmistificados?', answers: ['A IA é uma ferramenta complementar, mão tem um susbstituto.', 'A IA não possui limitações técnicas.', 'A IA pode substituir completamente os humanos no trabalho.', 'A IA é sempre objetiva e confiável.'], correct: 3, explanation: 'A ideia de que a IA é infalível e sempre objetiva é desmistificada, apontando que ela pode produzir resultados não confiáveis e conter vieses.' },
    { question: 'Por que a IA (especialmente a IA generativa) pode produzir resultados não confiáveis ou tendenciosos?', answers: ['Porque os algoritmos são muito simples.', 'Porque não possui capacidade de processamento suficiente.', 'Porque a IA tenta imitar a inteligência humana de forma imperfeita.', 'Devido a vieses dos dados de treinamento ou dados de entrada incompletos/incorretos'], correct: 3, explanation: 'Os vieses presentes nos dados usados para treinar a IA, ou a qualidade desses dados podem levar a resultados injustos, distorcidos ou falsos.' },
    { question: 'A inteligência artificial é equivalente à inteligência humana?', answers: ['Sim, especialmente a IA Geral.', 'Não, a IA Fraca se concentra em tarefas específicas e não entende o mundo como um ser humano.', 'Não, a IA só consegue imitar  o comportamento humano não pensar.', 'Sim, a IA alcançou a inteligência humana em todos os aspectos.'], correct: 1, explanation: 'É esclarecido que a IA atual (IA Fraca) foi projetada para tarefas específicas e não possui a compreensão geral do mundo que a inteligência humana tem.' },
    { question: 'Será que a IA substituirá completamente os humanos no ambiente de trabalho?', answers: ['Sim, é inevitável e acontecerá em breve.', 'Não, seu papel é mais complementar e cria novas oportunidades de emprego.', 'Isso só substituirá o trabalho manual, não o trabalho intelectual.', 'Depende do setor; em alguns, irá substituí-lo.'], correct: 1, explanation: 'O documento sugere que a IA atuará como uma ferramenta complementar, melhorando a eficiência e criando novas funções profissionais, em vez de substituir completamente os humanos.' },
    { question: 'A IA requer supervisão humana?', answers: ['Somente se forem detectados erros óbvios.', 'Sim, é necessário o monitoramento e a validação contínua dos seus resultados.', 'Inteligência artificial básica apenas, não avançada.', 'Não, a IA avançada pe completamente autônoma.'], correct: 1, explanation: 'Apesar de suas capacidades, a IA especialmente a IA generativa, requer supervisão humana devido à possibiloidade de erros, vieses ou “alucionações” (resultados fabricados). ' },
    { question: 'O que são “alucinações” de IA?', answers: ['Previsões incorretas sobre o futuro.', 'Problemas de hardware em servidores de IA.', 'Erros de cálculo em modelos estatísticos.', 'Os resultados produzidos pela IA são completamente fabricados, sem qualquer base na realidade.'], correct: 3, explanation: 'Alucinações referem-se à tendências de alguns modelos de IA de gerar informações ou resultados que parecem plausíveis, mas não têm qualuqer fundamento real. ' },
    { question: 'Qual a diferença entre inteligência artificial e um mecanismo de busca avançado?', answers: ['Um mecanismo de busca exibe as fontes, a IA as processa e as reinterpreta.', 'A IA apenas busca informações; o mecanismo de busca as cria.', 'Utilizar inteligência artificial é mais barato do que usar um mecanismo de busca.', 'Os mecanismo de busca são mais rápidos.'], correct: 0, explanation: ' Enquanto um mecanismo de busca lista e ordena o conteúdo existente , a IA analisa grandes quantidades de dados para gerar novas respostas ou soluções, reinterpretando as informações em vez de apenas exibi-las.' },
    { question: 'Qual das seguintes opções representa um desafio técnico ou prático da IA?', answers: ['O baixo custo dos recursos computacionais.', 'A falta de interesse público.', 'A necessidade de grandes recursos computacionais e energéticos.', 'A lentidão no avanço do campo.'], correct: 1, explanation: 'O documento destaca que a IA, especialmente a IA generativa, requer uma quantidade significativa de recursos computacionais (GPUs) e energia, além de apresentar desafios ecológicos.' },
    { question: 'Quais problemas de privacidade podem surgir com sistemas de IA?', answers: ['A IA coleta e armazena dados do usuário, o que pode representar riscos se não for gerenciado adequadamente.', 'A inteligência artificial não precisa de dados do usuário para funcionar.', 'A IA compartilha dados pessoais com outras IAs sem permissão.', 'A IA utiliza apenas dados públicos, não dados privados.'], correct: 0, explanation: 'Muitos sistemas de IA coletam dados do usuário para melhorar seu desempenho, o que representa riscos à privacidade se essa coleta e armazenamento não forem tratados de forma segura e transparente.' },
    { question: 'O que implica a “falta de padrões” em IA?', answers: ['Que todos os modelos de IA são idênticos.', 'Não existem critérios universais para regular o desenvolvimento e a aplicação da IA, o que leva a inconsistência éticas e de transparência.', 'Essa inteligência artificial está estagnada e não está progredindo.', 'A IA é muito fácil de implementar em qualquer sistema.'], correct: 1, explanation: 'A ausência de padrões universais pode resultar em diferentes abordagens éticas, níveis de transparência e protocolos de privacidade entre os diferentes modelos de IA.' },
    { question: 'O que significa dizer que os modelos de IA podem ter “problemas de consistência”?', answers: ['Eles sempre dão exatamente a mesma resposta para a mesma pergunta.', 'Que os seus resultados sejam sempre perfeitos e sem variações.', 'Eles só funcionam de forma consistente em ambientes controlados.', 'Devido à sua natureza probabilística, podem apresentar variações nos resultados mesmo com  entradas semelhantes.'], correct: 1, explanation: 'A natureza probabilística de muitos modelos de IA pode fazer com que eles gerem respostas ligeiramente diferentes para entradas muito semelhantes, o que é uma limitação a ser considerada.' },
  ]},
  { id: 'historia', icon: '◷', title: 'História da IA', category: 'ORIGENS', description: 'Marcos importantes desde o nascimento do campo até hoje.', questions: [
    { question: 'Em que ano ocorreu a Conferência de Dartmouth, associada ao início formal da IA?', answers: ['1945', '1950', '1956', '1969'], correct: 2, explanation: 'A Conferência de Dartmouth ocorreu em 1956 e ajudou a estabelecer a inteligência artificial como campo de estudo.' },
    { question: 'O que caracteriza um “inverno da IA”?', answers: ['Períodos de redução de interesse e financiamento', 'Uma estação climática criada por computadores', 'A época em que surgiram os celulares', 'O fim definitivo das pesquisas em IA'], correct: 0, explanation: 'O termo descreve períodos em que expectativas não foram atendidas e o financiamento e o interesse diminuíram.' },
    { question: 'O que contribuiu para os avanços recentes em IA?', answers: ['Mais dados, maior capacidade computacional e novos métodos', 'A eliminação de todos os dados de treinamento', 'A substituição da internet por computadores isolados', 'A proibição de redes neurais'], correct: 0, explanation: 'A disponibilidade de dados, hardware mais potente e melhorias nos algoritmos impulsionaram avanços recentes.' },
    { question: 'Quais fatores impulsionaram o "ressurgimento" da IA nas décadas de 1990 e 2000?', answers: [' aumento da capacidade computacional e os avanços nos algoritmos', 'A criação dos primeiros assistentes virtuais', 'A queda nos preços dos componentes eletrônicos', 'A invenção da internet e da World Wide Web'], correct: 0, explanation: 'O ressurgimento da IA deveu-se em grande parte ao aumento do poder de processamento e às melhorias nos algoritmos.' }
  ]},
  { id: 'simulado-exin-ia', icon: '↗', title: 'Simulado Exin Inteligência Artificial', category: 'TREINO', description: 'Pratique para a certificação Artificial Intelligence Foundation.', questions: [
    { question: 'Capacidade de entender e aprender, julgar e ter opiniões baseadas na razão. A que corresponde essa definição?', answers: ['Criatividade', 'Inteligência', 'Tecnologia', 'Pensamento'], correct: 1, explanation: '' },
    { question: 'O que é método científico?', answers: ['Uma abordagem procedural para aprender', 'Uma abordagem tecnológica para comunicar', 'Um método eficiente para ensinar novos conceitos', 'Um método empírico para adquirir conhecimento'], correct: 3, explanation: '' },
    { question: 'Qual é o objetivo dos princípios de Inteligência Artificial (IA) de Asilomar?', answers: ['Garantir que o desenvolvimento de IA tenha um gerente de produto', 'Garantir que o desenvolvimento de IA cumpra os objetivos financeiros', 'Garantir que a IA seja desenvolvida de fomra segura e benéfica', 'Garantir que a IA seja desenvolvida usando a melhor tecnologia'], correct: 2, explanation: '' },
    { question: 'Que tipo de Inteligência Artificial (IA) foca em realizar tarefas específicas dentro de um escopo definido?', answers: ['IA de domínio', 'IA geral', 'IA estreita', 'IA técnica'], correct: 2, explanation: '' },
    { question: 'Qual é um impacto ambiental da Inteligência Artificial (IA) na sociedade?', answers: ['Custo do desenvolvimento', 'Demanda por novas competências', 'Velocidade de desenvolvimento', 'Demanda de uso de água'], correct: 3, explanation: '' },
    { question: 'Que medida ajuda a limitar o impacto ambiental da Inteligência Artificial (IA)?', answers: ['Focar apenas em entregar os benefícios da IA', 'Usar modelos de IA verdes e energeticamente eficientes', 'Usar programação high-code', 'Usar abordagem de desenvolvimento de baixo custo'], correct: 1, explanation: '' },
    { question: 'O que é “ética na IA”?', answers: ['Diretrizes e princípios para tornar os sistemas de IA moralmente inteligentes', 'Diretrizes e princípios que regem a criação e o uso de sistemas de IA', 'Diretrizes para algoritmos avançados resolver dilemas éticos', 'Diretrizes para ensinar a sistemas de IA a tomar decisões morais'], correct: 1, explanation: '' },
    { question: 'Que padrão internacional especifica requisitos para a melhoria contínua do Sistema de Gestão de Inteligência Artificial (SGIA) nas organizações?', answers: ['ISO 9001', 'ISO 22989', 'ISO 31000', 'ISO 42001'], correct: 3, explanation: '' },
    { question: 'O que representa um desafio para o comportamento ético na implementação da IA?', answers: ['Ser interessante', 'Controle orçamentário', 'Conflito de interesse', 'Controle do cronograma'], correct: 2, explanation: '' },
    { question: 'Qual é uma estratégia para lidar com os desafios éticos da IA?', answers: ['Estar ciente dos aspectos financeiros do produto', 'Criar um guia do ciclo de vida do produto', 'Criar uma estrutura de risco ético ', 'Monitorar o progresso'], correct: 2, explanation: '' },
    { question: 'Por que regulamentação é considerada necessária para IA?', answers: ['Para limitar o ritmo da inovação', 'Para gerenciar os riscos associados', 'Para gerenciar o recrutamento', 'Para simplificar a complexidade'], correct: 1, explanation: '' },
    { question: 'O que não é uma técnica de gestão de riscos?', answers: ['Crise', 'Cynefin', 'PESTLE', 'SWOT'], correct: 0, explanation: '' },
    { question: 'Veículos autônomos são exemplos de quê?', answers: ['Tecnologia de Inteligência Artificial (IA)', 'Tecnologia humana', 'Nanotecnologia', 'Tecnologia social'], correct: 0, explanation: '' },
    { question: 'Qual é um exemplo comum de inteligência artificial (IA)?', answers: ['Trabalhador da construção civil', 'Secretária pessoal', 'Algoritmos de busca', 'Máquina de lavar'], correct: 2, explanation: '' },
    { question: 'O que é uma máquina capaz de realizar automaticamente uma série complexa de tarefas?', answers: ['Artificial', 'Inteligente', 'Programada', 'Robótica'], correct: 3, explanation: '' },
    { question: 'Uma Rede Neural é uma forma de quê?', answers: ['Automação, que aprende com sensores e Internet das Coisas (IoT)', 'Computação biológica, que aprende com as emoções humanas.', 'Aprendizado de Máquina, que aprende com dados estruturados e não estruturados.', 'Script, que aprende aleatoriamente com dados não estruturados.'], correct: 2, explanation: '' },
    { question: 'Qual é um conceito de Aprendizado de Máquina?', answers: ['Aglomeração (bunching)', 'Aglutinação (clumping)', 'Agrupamento (clustering)', 'Combinação(combining)'], correct: 2, explanation: '' },
    { question: 'Que tipo de dados são utilizados no Aprendizado de Máquina semi-supervisionado?', answers: ['Dados de sistemas especialistas', 'Dados rotulados e não rotulados', 'Dados aleatórios', 'Apenas dados não rotulados'], correct: 1, explanation: '' },
    { question: 'Que ação ocorre quando os dados são sintetizados e apresentados em forma de gráficos, tabelas e imagens?', answers: ['Limpeza de dados', 'Coleta de dados', 'Processamento de dados', 'Vizualização de dados'], correct: 3, explanation: '' },
    { question: 'Que verificação de qualidade de dados busca garantir que não haja conflito de dados, como entrar com texto em um campo numérico?', answers: ['Completitude', 'Consistência ', 'Atualidade(timeless)', 'Unicidade'], correct: 1, explanation: '' },
    { question: 'Que risco de Inteligência Artificial (IA) pode ser minimizado com a colaboração de pessoas especialistas no assunto (SME)?', answers: ['Viés', 'Violação de dados', 'Perda de serviço', 'Desinformação'], correct: 3, explanation: '' },
    { question: 'O que consiste em um uso comum de Big Data nas organizações?', answers: ['Identificação de riscos de saúde e segurança nas instalações da empresa.', 'Fornecimento de uma percepção do moral dos funcionários.', 'Fornecimento de uma percepção sobre os padrões e tendências de compra dos usuários.', 'Treinamento de modelos de Inteligência Artificial (IA) para ajudar no recrutamento e ambientação de novos funcionários.'], correct: 2, explanation: '' },
    { question: 'Que método de visualização de dados é o mais adequado para exibir, de uma só vez, diversos fluxos de dados de negócios, como Indicadores-Chave de Desempenho (KPIs)?', answers: ['Dashboard.', 'Infográfico.', 'Apresentação.', 'Relatório.'], correct: 0, explanation: '' },
    { question: '“Algoritmos de Aprendizagem Profunda capazes de reconhecer, sintetizar, traduzir, prever e gerar conteúdo usando conjuntos de dados muito grandes” .Que conceito de IA é esse?', answers: ['Realidade aumentada.', 'Modelos de Linguagem de Grande Porte (LLMs).', 'Álgebra Linear.', 'Realidade Virtual.'], correct: 1, explanation: '' },
    { question: 'Em IA generativa, que termo é usado para descrever a alteração das instruções dadas a um modelo, a fim de gerar uma resposta ou saída específica?', answers: ['Seleção de dados.', 'Pocessamento de Linguagem Natural.', 'Engenharia de prompt.', 'Treinamento.'], correct: 2, explanation: '' },
    { question: 'Que etapa do processo de Aprendizado de Máquina está relacionada à representação de dados como imagens, gráficos, áudio, ou similares, com o objetivo de torná-los mais fáceis de entender e obter percepções?', answers: ['Pré-processamento de dados.', 'Seleção de dados.', 'Visualização de dados.', 'Revisão.'], correct: 2, explanation: '' },
    { question: 'Que tarefa melhor representa uma oportunidade para usar automação em uma empresa de logística?', answers: ['Realização de avaliações virtuais dos funcionários.', 'Criação de listas de atribuição de atividades aos funcionários, baseadas em seus contratos de trabalho e nas entregas recorrentes.', 'Inspeções físicas de uma frota de veículos de entrega.', 'Ligação para contas-chave (key accounts) para organizar as datas de entrega.'], correct: 1, explanation: '' },
    { question: 'Em que parte de um documento de business case deve ser registrada uma visão geral clara, concisa e persuasiva do projeto ou proposta?', answers: ['Avaliação de impacto.', 'Resumo executivo.', 'Recomendações.', 'Avaliação de riscos.'], correct: 1, explanation: '' },
    { question: 'Em que quadrante da Matriz de Poder e Interesse se posiciona uma parte interessada com alto poder e alto interessada com alto poder e alto interesse?', answers: ['Gerenciar de perto.', 'Manter informado.', 'Manter satisfeito.', 'Monitorar.'], correct: 0, explanation: '' },
    { question: 'Em um projeto Cascata, qual etapa ocorre imediatamente após o design?', answers: ['Implantação.', 'Implementação.', 'Manutenção.', 'Teste.'], correct: 1, explanation: '' },
    { question: 'Ao implementar uma solução de IA em uma organização, que estrutura(framwork) deve ser utilizada para avaliar o impacto dos 3Ps (profit, people, and planet; lucro, pessoas e planeta) da mudança?', answers: ['Matriz de Poder e Interesse.', 'Apetite de riscos.', 'Tripé da sustentabilidade (trible bottom line).', 'Matriz salarial tridimensional(triple income matrix).'], correct: 2, explanation: '' },
    { question: 'Quem é o proprietário do risco (risk owner) na avaliação de riscos?', answers: ['A pessoa que, em última instância, é responsável por garantir que o risco seja gerenciado adequadamente.', 'O gerente que assegura que o risco foi avaliado e registrado adequadamente.', 'A equipe organizacional que é mais diretamente impactada pelo risco em potencial.', 'O patrocinador do projeto que financiou o projeto e deve ser responsável por seu impacto.'], correct: 0, explanation: '' },
    { question: 'Que área da governança está relacionada a identificar, avaliar e reduzir ameaças e incertezas que podem afetar uma organização?', answers: ['Conformidade.', 'Igualdade, diversidade e inclusão.', 'Pesquisa de mercado.', 'Avaliação de riscos.'], correct: 3, explanation: '' },
    { question: 'Qual é uma atividade de governança na implementação da IA em uma organização?', answers: ['Análise da concorrência.', 'Análise de custo-benefício.', 'Monitoramento do recrutamento.', 'Avaliação de riscos.'], correct: 3, explanation: '' },
    { question: 'Como a IA melhora as funções no marketing?', answers: ['Ao automatizar a análise de dados e a previsão de tendências.', 'Ao aumentar o custo das campanhas de marketing.', 'Ao limitar a criatividade nas estratégias de marketing.', 'Ao tornar complicado alcançar o público-alvo.'], correct: 0, explanation: '' },
    { question: 'Para que a IA pode ser usada em pesquisa e desenvolvimento (P&D)?', answers: ['Montar experimentos.', 'Coletar dados.', 'Aumentar a lealdade.', 'Aumentar os prazos.'], correct: 1, explanation: '' },
    { question: 'Que ferramenta de IA generativa é comumente utilizada em vendas e marketing?', answers: ['Chabots.', 'Conversas.', 'Serviço ao cliente.', 'Snapchat.'], correct: 0, explanation: '' },
    { question: 'O termo “humano mais máquina” geralmente se refere a quê?', answers: ['Conceito em que humanos e máquinas estão em concorrência direta.', 'Combinação de humanos e máquinas para aumentar capacidades.', 'Substituição de humanos por máquinas em todas as tarefas.', 'Estudo da inteligência humana por meio de máquinas.'], correct: 1, explanation: '' },
    { question: 'Qual é um impacto positivo em potencial de IA no meio ambiente?', answers: ['Contribuição para mudanças climáticas.', 'Esgotamento de recursos naturais.', 'Aumento do consumo de energia.', 'Redução do consumo de energia.'], correct: 3, explanation: '' },
    { question: '“Um período futuro caracterizado por mudança tecnológica rápida que transformará a vida humana de maneira irreversível”.  A que isso se refere?', answers: ['Capacidades.', 'Conectividade.', 'Individualidade.', 'Singularidade.'], correct: 3, explanation: '' },
  ]},
  { id: 'redes-neurais', icon: '⌘', title: 'Redes neurais', category: 'MODELOS', description: 'Uma introdução às redes neurais e ao aprendizado profundo.', questions: [
    { question: 'O que é uma rede neural artificial?', answers: ['Um modelo computacional formado por unidades conectadas que processam informação', 'Uma rede de cabos ligados ao cérebro humano', 'Um banco de dados exclusivo para hospitais', 'Um programa que não precisa de exemplos'], correct: 0, explanation: 'Redes neurais são modelos compostos por unidades conectadas, inspirados de forma simplificada em aspectos do cérebro.' },
    { question: 'O que significa “aprendizado profundo” (deep learning)?', answers: ['Uso de redes neurais com muitas camadas', 'Estudar IA em lugares subterrâneos', 'Ensinar um computador a guardar senhas', 'Um método que elimina a necessidade de dados'], correct: 0, explanation: 'Deep learning usa redes neurais com múltiplas camadas para aprender representações complexas.' },
    { question: 'Durante o treinamento, os pesos de uma rede neural são ajustados para...', answers: ['Reduzir erros nas previsões do modelo', 'Aumentar o tamanho físico do computador', 'Esconder os dados de entrada', 'Mudar a linguagem do teclado'], correct: 0, explanation: 'O treinamento ajusta os pesos para que as previsões do modelo se aproximem mais dos resultados esperados.' },
  ]},
  { id: 'ia-generativa', icon: '✧', title: 'IA generativa', category: 'CRIAÇÃO DE CONTEÚDO', description: 'Como ferramentas de IA geram textos, imagens e outros conteúdos.', questions: [
    { question: 'O que caracteriza uma IA generativa?', answers: ['Produz conteúdo novo com base em padrões aprendidos', 'Apenas organiza arquivos por data', 'Garante que todo conteúdo criado seja verdadeiro', 'Só consegue repetir uma única frase'], correct: 0, explanation: 'Modelos generativos criam conteúdo novo, como texto, imagem, áudio ou código, com base em padrões aprendidos.' },
    { question: 'Por que uma resposta gerada por IA pode parecer convincente e ainda estar errada?', answers: ['O modelo pode produzir texto plausível sem verificar os fatos', 'A IA sempre consulta especialistas humanos', 'A aparência do texto comprova sua exatidão', 'Modelos não usam padrões de linguagem'], correct: 0, explanation: 'Fluência não garante precisão. É importante checar informações relevantes em fontes confiáveis.' },
    { question: 'Qual é um uso comum de IA generativa?', answers: ['Criar um rascunho de texto a partir de uma instrução', 'Prever com certeza o futuro', 'Substituir toda revisão humana', 'Confirmar automaticamente a autoria de qualquer imagem'], correct: 0, explanation: 'A IA generativa pode ajudar a criar rascunhos, mas o conteúdo deve ser revisado.' },
  ]},
  { id: 'prompts', icon: '⌁', title: 'Prompts e interação', category: 'COMO PEDIR', description: 'Aprenda a dar instruções mais claras para ferramentas de IA.', questions: [
    { question: 'O que é um prompt?', answers: ['Uma instrução ou entrada fornecida a um sistema de IA', 'O resultado final de uma pesquisa científica', 'Um tipo de placa de vídeo', 'Uma senha obrigatória para acessar a internet'], correct: 0, explanation: 'Prompt é a instrução, pergunta ou conteúdo enviado ao modelo para orientar sua resposta.' },
    { question: 'Qual prompt tende a ser mais útil?', answers: ['Um pedido claro, com contexto e formato desejado', 'Uma frase vaga sem explicar o objetivo', 'Uma lista de palavras sem relação', 'Um pedido para “adivinhar” informações que não foram dadas'], correct: 0, explanation: 'Contexto, objetivo e formato esperado ajudam a ferramenta a produzir uma resposta mais alinhada.' },
    { question: 'Se a primeira resposta não for útil, o que você pode fazer?', answers: ['Reformular o pedido e acrescentar contexto', 'Assumir que não existe outra resposta', 'Compartilhar dados pessoais sensíveis', 'Desativar a revisão da resposta'], correct: 0, explanation: 'Reformular e especificar o que precisa pode melhorar a resposta. Continue verificando informações importantes.' }
  ]},
  { id: 'dados', icon: '▤', title: 'Dados e treinamento', category: 'A MATÉRIA-PRIMA', description: 'Explore como dados influenciam o aprendizado e os resultados.', questions: [
    { question: 'Por que a qualidade dos dados importa?', answers: ['Dados ruins ou incompletos podem levar a resultados pouco confiáveis', 'Os dados definem o formato físico do computador', 'Modelos só aprendem com dados em inglês', 'Dados eliminam a necessidade de avaliar o sistema'], correct: 0, explanation: 'Dados representativos e de boa qualidade ajudam, mas não garantem sozinhos um modelo confiável.' },
    { question: 'O que pode acontecer se os dados não representarem bem diferentes grupos?', answers: ['O modelo pode funcionar pior para alguns grupos', 'O modelo se torna automaticamente imparcial', 'O sistema deixa de usar algoritmos', 'A capacidade de processamento aumenta'], correct: 0, explanation: 'Dados pouco representativos podem gerar desempenho desigual ou reforçar vieses.' },
    { question: 'Qual cuidado é importante ao compartilhar dados com ferramentas de IA?', answers: ['Evitar inserir informações pessoais ou confidenciais sem autorização', 'Enviar senhas para melhorar o treinamento', 'Publicar dados privados em prompts', 'Presumir que toda ferramenta apaga os dados imediatamente'], correct: 0, explanation: 'Leia as políticas da ferramenta e não compartilhe dados sensíveis sem base e autorização adequadas.' }
  ]},
  { id: 'uso-responsavel', icon: '♡', title: 'Uso responsável', category: 'ÉTICA E SEGURANÇA', description: 'Privacidade, transparência e decisões responsáveis com IA.', questions: [
    { question: 'Qual é uma boa prática ao usar respostas de IA?', answers: ['Verificar informações importantes em fontes confiáveis', 'Tratar toda resposta como verdade absoluta', 'Usar o resultado sem considerar o contexto', 'Ignorar possíveis erros ou vieses'], correct: 0, explanation: 'Sistemas de IA podem errar. A verificação é especialmente importante em decisões relevantes.' },
    { question: 'O que é viés em um sistema de IA?', answers: ['Um resultado sistematicamente desfavorável ou distorcido', 'Uma atualização de software', 'Uma forma de aumentar a velocidade da internet', 'Uma garantia de neutralidade'], correct: 0, explanation: 'Vieses podem refletir desequilíbrios nos dados ou nas escolhas de desenvolvimento e causar impactos injustos.' },
    { question: 'Quem deve ser responsável por decisões importantes apoiadas por IA?', answers: ['Pessoas e organizações responsáveis pelo uso do sistema', 'O algoritmo sozinho, sem supervisão', 'Qualquer pessoa que veja a resposta', 'Ninguém, pois a decisão é automática'], correct: 0, explanation: 'A responsabilidade não deve ser transferida ao sistema: pessoas e organizações precisam supervisionar o uso.' }
  ]},
  { id: 'visao-computacional', icon: '◎', title: 'Visão computacional', category: 'IA E IMAGENS', description: 'Descubra como sistemas analisam imagens e vídeos.', questions: [
    { question: 'O que estuda a visão computacional?', answers: ['Como computadores analisam e interpretam imagens ou vídeos', 'Como computadores melhoram a visão humana', 'Como criar monitores maiores', 'Como transmitir arquivos de áudio'], correct: 0, explanation: 'Visão computacional reúne técnicas para extrair informações de imagens e vídeos.' },
    { question: 'Qual tarefa é um exemplo de visão computacional?', answers: ['Identificar objetos em uma fotografia', 'Traduzir uma frase escrita', 'Compor uma melodia a partir de texto', 'Organizar contatos por sobrenome'], correct: 0, explanation: 'Detectar ou classificar objetos em imagens é uma aplicação típica de visão computacional.' },
    { question: 'Por que é importante avaliar um sistema de reconhecimento facial?', answers: ['Pode haver erros e diferenças de desempenho entre grupos', 'O sistema nunca processa imagens pessoais', 'A avaliação torna desnecessária a proteção de dados', 'A tecnologia é sempre 100% precisa'], correct: 0, explanation: 'É essencial avaliar precisão, impactos, vieses e privacidade antes de usar essas tecnologias.' }
  ]},
  { id: 'simulado-exin-machine-learning', icon: '“', title: 'Simulado Exin Machine Learning', category: 'TREINO', description: 'Pratique para a certificação EXIN BCS Machine Learning Award.', questions: [
    { question: 'O que é machine learning (aprendizado de máquina)?', answers: ['A capacidade de aprender com uma máquina.', 'O uso de algoritmos de computador para capturar a experiência humana.', 'O uso de algoritmos de computador para obter uma compreensão (insight) dos dados.', 'O uso da teoria da aprendizagem para dar sentido aos dados.'], correct: 2, explanation: 'Usando algoritmos, os aplicativos de aprendizado de máquina podem realizar tarefas como classificação, reconhecimento de imagem e previsão através da análise de dados.' },
    { question: 'Qual é um exemplo de linguagem orientada a objetos?', answers: ['CSS.', 'Python.', 'R.', 'SQL.'], correct: 1, explanation: 'Uma linguagem orientada a objetos é aquela que apresenta objetos que contêm campos de dados e códio. Esse tipo de linguagem é comumente usado no aprendizado de máquina, em que desenvolvedores desejam manipular os objetos(ou seja, os dados) em vez de manipular a lógica, tendo em vista que problemas grandes e complexos não podem ser resolvidos por meio de lógica simples. Linguagens como “R” são linguagens de programação funcional, embora suportem programação orientada a objetos.' },
    { question: 'Qual princípio matemático pode ser melhor usado para medir a incerteza ao determinar um resultado?', answers: ['Cálculo.', 'Álgebra linear.', 'Probabilidade.', 'Estatística.'], correct: 2, explanation: 'A probabilidade é uma forma matemática de medir a incerteza. Com base nos dados, um modelo de aprendizado de máquina usará medidas de incerteza para tomar uma decisão' },
    { question: 'O aprendizado de máquina pode ser usado para dividir dados não rotulados em grupos. Como esse processo é conhecido?', answers: ['Classificação.', 'Agrupamento(cluestering).', 'Agrupamento(grouping).', 'Predição.'], correct: 1, explanation: 'O agrupamento (clustering) pode ser usado para agrupar dados não rotulados com base em recursos semelhantes, quando não há rótulos para classificar ou ordenar facilmente os dados em categorias específicas.' },
    { question: 'Quais duas linguagens são comumente usadas no aprendizado de máquina? Lembre-se de escolher 2 respostas.', answers: ['CSS', 'MATLAB', 'Python', 'SQL'], correct: [1, 2], explanation: 'Python, MATLAB, Java e R são linguagens comuns usadas no aprendizado de máquina. SQL é usado para estruturar dados em um banco de dados. CSS e HTML5 são usados para desenvolver e estilizar o conteúdo da web.' },
    { question: 'O que é necessário para treinar um modelo de aprendizado de máquina?', answers: ['Rede neural.', 'Professor.', 'Dados de teste.', 'Ferramentas de visualização.'], correct: 2, explanation: 'Explicação: Para treinar um modelo de aprendizado de máquina, dados e algoritmos são necessários.' },
    { question: 'Quais duas bibliotecas podem ser usadas para desenvolver modelos de aprendizado de máquina? Lembre-se de escolher 2 respostas.', answers: ['Google Analytics', 'Minecraft', 'Scikit-Learn', 'TensorFlow'], correct: [2, 3], explanation: 'O TensorFlow e o Scikit-Learn são duas bibliotecas de código aberto que podem ser usadas para desenvolver o aprendizado de máquina.' },
    { question: 'Satpal está desenvolvendo um aplicativo (app) que pode ser usado para pedir comida de diferentes restaurantes e recebê-la diretamente em sua casa. Como parte da funcionalidade, ele criou um modelo de aprendizado de máquina que usa regressão para fornecer ai usuário um “tempo de entrega esperado” para a comida com base na hora do dia, na distância entre o restaurante e o local pretendido e no tempo médio de entrega. O algoritmo que está sendo usado foi configurado para comparar as duas variáveis “hora do dia” e “tempo médio de entrega” para fazer a previsão. Ao testar o aplicativo, Satpal descobriu que o “tempo de entrega esperado” previsto parece incrivelmente longo com base na sua localização e na do restaurante. Qual é provavelmente o problema?', answers: ['O tempo médio de entrega.', 'A velocidade média do motorista registrada.', 'A escolha do algoritmo.', 'As variáveis que estão sendo comparadas nos dados.'], correct: 3, explanation: 'Satpal não inclui a variável “distância” em seu modelo. Para calcular o tempo de entrega esperado, o algoritmo deve comparar as três variáveis “hora do dia”, “distância” e “tempo médio de entrega para poder fazer uma predição mais exata.' },
    { question: 'Roisin está treinando seu modelo de aprendizado de máquina usando dados não rotulados e nenhum dado de treinamento. Que tipo de abordagem ela está usando?', answers: ['Aprendizado por reforço.', 'Aprendizado smi-supervisionado.', 'Aprendizado supervisionado.', 'Aprendizado não supervisionado'], correct: 3, explanation: 'O aprendizado não supervisionado é usado com frequência para obter uma compreensão (insights) de dados não rotulados e quando ainda há um resultado desejado definido. Um algoritmo comum usado no aprendizado não supervisionado é o agrupamento (clustering).' },
    { question: 'Quais dois problemas podem ser resolvidos através da classificação? Lembre-se de escolher 2 respostas.', answers: ['Agrupamento de conjuntos de dados não rotulados para identificar diferentes segmentos de clientes.', 'Identificação de uma imagem com base em recursos específicos de dados.', 'Realização de predições sobre o número de casos de um vírus em uma determinada área.', 'Divisão de e-mails em “recebidos” e “spam”.'], correct: [1, 3], explanation: 'A classificação pode ser usada para dividir dados rotulados, como e-mails, em categorias específicas com base em determinados recursos. Ela também pode ser usada no reconhecimento de imagens usando uma rede neural em que determinados recursos são identificados e comparados a uma iumagem armazenada para classificar o que é a imagem.' },
    { question: 'Qual é um software de código aberto desenvolvido pelo Google para projetar modelos de aprendizado de máquina?', answers: ['Google Analytics.', 'Scikit-Learn.', 'TensorFlow.', 'Weka.'], correct: 2, explanation: 'O TensorFlow é comumente usado para projetar modelos de aprenziado de máquina.' },
    { question: 'Que tipo de algoritmo é comumente usado na aprendisagem profunda?', answers: ['K-vizinhos mais próximos (k-nearest neighbors).', 'Regressão linear.', 'Naive Bayes.', 'Rede neural.'], correct: 3, explanation: 'As redes neurais são comumente usadas na aprendizagem profunda devido às suas múltiplas camadas que permitem a resolução de problemas mais complexos.' },
    { question: 'O que é aprendizado supervisionado?', answers: ['Treinamento de um modelo de aprendizado de máquina  por reforço.', 'Treinamento de um modelo de aprendizado máquina usando dados não rotulados.', 'Treinamento de um modelo de aprendizado máquina em que o resultado (output) deseja é conhecido.', 'Treinamento de um modelo de aprendizado máquina em que o output é desconhecido. '], correct: 2, explanation: 'No aprendizado supervisionado, geralmente há dados rotulados que podem ser usados para treinar o modelo de aprendizado de máquina, de modo que , quando o modelo recebe dados semelhantes, ele sabe como classificá-los. Portanto, o output já é conhecido.' },
    { question: 'Quando deve ser usado o aprendizado não supervisionado?', answers: ['Quando o algoritmo não requer dados de entrada.', 'Quando se está muito ocupado para supervisionar o processo.', 'Quando há conjuntos de dados rotulados.', 'Quando há conjuntos de dados não rotulados.'], correct: 3, explanation: '' },
    { question: 'Dale deseja desenvolver um aplicativo de aprendizado de máquina que seja capaz de dividir diferentes tipos de solicitações que usuários que foram inseridas manualmente em um sistema. Devido ao volume de solicitações de usuários, muitas vezes demora para uma pessoa ler cada solicitação. Nem sempre é fácil quantificar ou priorizar as solicitações com base no número de vezes que o mesmo tipo de solicitação é feito. Dale observou que há palavras específicas que aparecem regularmente em determinados tipos de solicitações de usuários e que poderiam ser usadas para identificá-las. Portanto, ele gostaria que um modelo de aprendizado de máquina lesse cada solicitação e as dividisse em categorias definidas com base na presença pu não dessas palavras específicas. Que tipo de abordagem Dale deve usar para resolver o problema?', answers: ['Classificação.', 'Agrupamento (clustering).', 'Regressão.', 'Reforço.'], correct: 0, explanation: 'Um algoritmo como o Naive Bayes poderia ser usado para resolver esse problema, de modo que os dados poderiam ser classificados com base em determinadas características, ou seja, as palavras contidas em cada solicitação de usuário.' },
    { question: 'Qual algoritmo pode ser usado no agrupamento (clustering)?', answers: ['K-means.', 'K-vizinhos mais próximos (k-nearest neighbors).', 'Regressão linear.', 'Regressão logística.'], correct: 0, explanation: ' K está relacionado ao número de agrupamentos (clusters) em que se deseja agrupar os dados. Ao atribuir pontos de dados, pode-se agrupar os dados com base em sua proximidade com cada ponto, assim os agrupando (clustering).' },
    { question: 'Qual é a finalidade do pré-processamento de dados? Lembre se de escolher 2 respostas.', answers: ['Limpar os dados para garantir que eles sejam adequados para o treinamento de um modelo de aprendizado de máquina.', 'Identificar recursos ou valores-alvo nos dados que podem ser usados para criar dados de treinamento.', 'Identificar os tipos de dados necessários para resolver o problema.', 'Apresentar os dados usando um gráfico ou tabela.'], correct: [0, 1], explanation: 'A seleção de dados é o processo de identificação dos tipos de dados necessários para resolver o problema. A visualização de dados é usada posteriormente para exibir os dados em um formato gráfico para facilitar a análise dos dados antes de treinar um modelo.' },
    { question: 'Qual é a ordem correta das etapas do processo de aprendizado de máquina?', answers: ['1. Identificação do problema 2. Pré-processamento de dados. 3. Seleção de dados. 4. Testes. 5. Treinamento.', '1.Identificação do problema. 2.Pré-processamento de dados. 3.Seleção de dados. 4.Treinamento. 5.Testes. ', '1.Identificação do problema. 2.Seleção de dados. 3.Pré-processamento de dados. 4.Treinamento. 5.Testes. ', '1.Identificação do problema. 2.Treinamento. 3.Seleção de dados. 4.Pré-processamento de dados. 5.Testes.'], correct: 2, explanation: 'As etapas finais desse processo seriam a revisão dos resultados antes da implantação do modelo. Normalmente, a visualização de dados seria realizada antes do treinamento para analisar os dados e entendê-los melhor antes de usá-los no treinamento do modelo.' },
  ]}
];

let activeQuiz = null;
let currentQuestion = 0;
let selectedAnswers = [];
let score = 0;
let answered = false;

const getCorrect = (item) => Array.isArray(item.correct) ? item.correct : [item.correct];

const catalogView = document.querySelector('#catalog-view');
const catalogIntro = document.querySelector('#catalog-intro');
const quizView = document.querySelector('#quiz-view');
const quizGrid = document.querySelector('#quiz-grid');
const activeQuizTitle = document.querySelector('#active-quiz-title');
const questionCount = document.querySelector('#question-count');
const questionTopic = document.querySelector('#question-topic');
const questionTitle = document.querySelector('#question-title');
const answersContainer = document.querySelector('#answers');
const feedback = document.querySelector('#feedback');
const nextButton = document.querySelector('#next-button');
const backQuestionButton = document.querySelector('#back-question');
const backCatalogButton = document.querySelector('#back-to-catalog');
const progressFill = document.querySelector('#progress-fill');
const progressBar = document.querySelector('.progress-track');
const quizContent = document.querySelector('#quiz-content');
const result = document.querySelector('#result');

function renderCatalog() {
  quizGrid.replaceChildren();
  quizzes.forEach((quiz, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'quiz-tile';
    card.innerHTML = `<span class="tile-top"><span class="tile-icon" aria-hidden="true">${quiz.icon}</span><span class="tile-number">${String(index + 1).padStart(2, '0')}</span></span><span class="tile-category"></span><span class="tile-title"></span><span class="tile-description"></span><span class="tile-bottom"><span>${quiz.questions.length} perguntas</span><span class="tile-arrow" aria-hidden="true">↗</span></span>`;
    card.querySelector('.tile-category').textContent = quiz.category;
    card.querySelector('.tile-title').textContent = quiz.title;
    card.querySelector('.tile-description').textContent = quiz.description;
    card.addEventListener('click', () => startQuiz(quiz));
    quizGrid.append(card);
  });
}

function startQuiz(quiz) {
  activeQuiz = quiz;
  currentQuestion = 0;
  score = 0;
  catalogView.hidden = true;
  catalogIntro.hidden = true;
  quizView.hidden = false;
  quizContent.hidden = false;
  result.hidden = true;
  activeQuizTitle.textContent = quiz.title.toLocaleUpperCase('pt-BR');
  progressBar.setAttribute('aria-valuemax', String(quiz.questions.length));
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
  const item = activeQuiz.questions[currentQuestion];
  const required = getCorrect(item).length;
  selectedAnswers = [];
  answered = false;
  questionCount.innerHTML = `${String(currentQuestion + 1).padStart(2, '0')} <span>/ ${String(activeQuiz.questions.length).padStart(2, '0')}</span>`;
  questionTopic.textContent = activeQuiz.category + (required > 1 ? ` · ESCOLHA ${required} RESPOSTAS` : '');
  questionTitle.textContent = item.question;
  answersContainer.replaceChildren();
  feedback.hidden = true;
  feedback.classList.remove('is-wrong');
  nextButton.disabled = true;
  nextButton.innerHTML = 'Conferir resposta <span aria-hidden="true">→</span>';
  backQuestionButton.hidden = currentQuestion === 0;
  progressFill.style.width = `${(currentQuestion / activeQuiz.questions.length) * 100}%`;
  progressBar.setAttribute('aria-valuenow', String(currentQuestion));

  item.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = `<span class="answer-key" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span class="answer-text"></span>`;
    button.querySelector('.answer-text').textContent = answer;
    button.addEventListener('click', () => selectAnswer(index));
    answersContainer.append(button);
  });
}

function selectAnswer(index) {
  if (answered) return;
  const required = getCorrect(activeQuiz.questions[currentQuestion]).length;

  if (required === 1) {
    selectedAnswers = [index];
  } else if (selectedAnswers.includes(index)) {
    selectedAnswers = selectedAnswers.filter((i) => i !== index);
  } else {
    selectedAnswers.push(index);
    if (selectedAnswers.length > required) selectedAnswers.shift();
  }

  [...answersContainer.children].forEach((button, i) =>
    button.setAttribute('aria-pressed', String(selectedAnswers.includes(i)))
  );
  nextButton.disabled = selectedAnswers.length !== required;
}

function checkAnswer() {
  if (selectedAnswers.length === 0 || answered) return;
  answered = true;
  const item = activeQuiz.questions[currentQuestion];
  const correct = getCorrect(item);
  const isCorrect =
    selectedAnswers.length === correct.length &&
    selectedAnswers.every((i) => correct.includes(i));
  if (isCorrect) score += 1;

  [...answersContainer.children].forEach((button, index) => {
    button.disabled = true;
    if (correct.includes(index)) button.classList.add('correct');
    if (selectedAnswers.includes(index) && !correct.includes(index)) button.classList.add('incorrect');
  });

  feedback.textContent = `${isCorrect ? 'Resposta certa! ' : 'Quase! '}${item.explanation}`;
  feedback.classList.toggle('is-wrong', !isCorrect);
  feedback.hidden = false;
  nextButton.innerHTML = currentQuestion === activeQuiz.questions.length - 1
    ? 'Ver resultado <span aria-hidden="true">→</span>'
    : 'Próxima pergunta <span aria-hidden="true">→</span>';
}

function showResult() {
  quizContent.hidden = true;
  result.hidden = false;
  progressFill.style.width = '100%';
  progressBar.setAttribute('aria-valuenow', String(activeQuiz.questions.length));
  let title = 'Você chegou ao fim!';
  let message = 'Cada pergunta é uma oportunidade para aprender. Reveja os conceitos e tente novamente quando quiser.';
  if (score === activeQuiz.questions.length) {
    title = 'Mandou muito bem!';
    message = 'Você acertou tudo neste tema. Continue explorando os outros questionários!';
  } else if (score >= Math.ceil(activeQuiz.questions.length * 0.67)) {
    title = 'Ótimo trabalho!';
    message = 'Você já tem uma boa base neste tema. Continue explorando e aprendendo!';
  }
  result.innerHTML = `<div class="result-icon" aria-hidden="true">✳</div><div class="result-kicker">QUESTIONÁRIO CONCLUÍDO</div><h2>${title}</h2><div class="result-score">${score}<span class="result-total"> / ${activeQuiz.questions.length}</span></div><p>${message}</p><div class="result-actions"><button class="restart-button" id="retry-quiz" type="button">Tentar novamente <span aria-hidden="true">↻</span></button><button class="restart-button outline-button" id="result-catalog" type="button">Escolher outro tema</button></div>`;
  result.querySelector('#retry-quiz').addEventListener('click', () => startQuiz(activeQuiz));
  result.querySelector('#result-catalog').addEventListener('click', showCatalog);
}

function showCatalog() {
  quizView.hidden = true;
  catalogView.hidden = false;
  catalogIntro.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

backCatalogButton.addEventListener('click', showCatalog);
backQuestionButton.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
});
nextButton.addEventListener('click', () => {
  if (!answered) return checkAnswer();
  if (currentQuestion < activeQuiz.questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showResult();
  }
});
document.querySelector('#brand-home').addEventListener('click', (event) => {
  event.preventDefault();
  if (!quizView.hidden) showCatalog();
  else window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderCatalog();