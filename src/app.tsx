import { Button } from './components/ui/button';
import { Computer, MapPin, Settings, Package, MessageSquare, Shield, Database, BarChart3, Brain, Banknote, Clock, History, FileText, RefreshCw, Usb, Globe, Lock, Layout } from 'lucide-react';
import { useState } from 'react';
import "./app.css";

const features = [
  {
    title: "Inventário de TI",
    icon: Computer,
    image: "/main-inventory.png",
    description: "Gerencie todos seus ativos de TI em um só lugar"
  },
  {
    title: "Geolocalização",
    icon: MapPin,
    image: "/images/geolocation.jpg",
    description: "Localize seus ativos em tempo real"
  },
  {
    title: "Configuração de ativos",
    icon: Settings,
    image: "/images/assets.jpg",
    description: "Configure e monitore seus ativos remotamente"
  },
  {
    title: "Gestão de Softwares",
    icon: Package,
    image: "/images/software.jpg",
    description: "Controle todas as suas licenças de software"
  },
  {
    title: "Mensageria",
    icon: MessageSquare,
    image: "/images/messaging.jpg",
    description: "Comunicação integrada com sua equipe"
  },
  {
    title: "Conformidade de Infraestrutura",
    icon: Shield,
    image: "/images/compliance.jpg",
    description: "Mantenha sua infraestrutura sempre em conformidade"
  }
];

const benefitsData = [
  {
    icon: Database,
    title: "Colete informações de hardware e software",
    description: "Ao coletar informações dos seus ativos de TI, você estará mais preparado para gerenciar sua infraestrutura."
  },
  {
    icon: BarChart3,
    title: "Gerencie seus ativos de maneira eficiente",
    description: "Ativos bem gerenciados não só reduzem custos, mas também reforçam a segurança e impulsionam a produtividade."
  },
  {
    icon: Brain,
    title: "Tome decisões mais assertivas",
    description: "Com informações precisas e análise objetiva, você pode tomar as melhores decisões para seus ativos e sua empresa."
  },
  {
    icon: Banknote,
    title: "Evite perdas financeiras",
    description: "Reduza custos, aumente a segurança, evite multas por problemas de licenciamento e proteja seus ativos TI de forma rápida."
  }
];

export function App() {
  const [activeCard, setActiveCard] = useState<string | null>("Inventário de TI");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Gerenciamento Completo de Ativos de TI
          <span className="text-primary block">Simplificado</span>
        </h1>
        <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
          Inventário de Hardware e Software, monitoramento em tempo real e gerenciamento remoto
          para toda sua infraestrutura de TI.
        </p>
            
            {/* Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg border border-input"
                  required
                />
              </div>
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                Faça o Teste Grátis
              </Button>
            </form>
          </div>

          {/* Right Column - Content */}
          <div className="flex justify-center">
          <iframe
              className="w-full md:h-80 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/ID_DO_VIDEO"
              title="Demonstração do Force1 Inventory"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Recursos Principais</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`
              p-6 rounded-lg border border-input bg-card 
              transition-all duration-500 ease-in-out
              relative after:absolute after:bottom-0 after:left-0 
              after:h-1 after:w-full after:rounded-b-lg
              ${
                activeCard === feature.title 
                ? 'after:bg-gradient-to-r after:from-violet-600 after:via-purple-500 after:to-fuchsia-500' 
                : 'after:bg-transparent'
              }
            `}
            onMouseEnter={() => setActiveCard(feature.title)}
            // onMouseLeave={() => setActiveCard(null)}
          >
            <div className="flex items-center gap-4">
              <feature.icon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="mt-4 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      {activeCard && (
        <div className="mt-8 transition-all duration-300">
          <img
            src={features.find(f => f.title === activeCard)?.image}
            alt={activeCard}
            className="w-full max-h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl">O <span className="font-bold text-3xl text-green-500">Agente Track</span> é a solução perfeita para empresas que
        buscam <span className="font-bold text-3xl text-green-500"><br/>controle na gestão dos seus ativos de TI</span></h2>
      <img
          src="/svg-inventory.svg"
          alt="Inventário de TI 40+"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 border-l-2 border-purple-500/10 hover:border-purple-500 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <benefit.icon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
              </div>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold">
              Inventário de <span className="font-bold text-3xl text-green-500">Hardware e Software</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tenha o controle de todos os tipos de inventários, de hardware a software. 
              O Force1 Inventory é uma solução poderosa, com uma variedade de recursos e 
              funcionalidades, ideal para empresas inteligentes que desejam otimizar o uso 
              de seus ativos TI, reduzir custos e proteger seus dados.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
              Faça o Teste Grátis
            </Button>
          </div>

          {/* Right Column - Overlapping Images */}
          <div className="flex-1 relative h-[600px]">
            <img
              src="/main-inventory.png"
              alt="Inventory Preview 1"
              className="absolute top-20 right-8 w-full rounded-lg shadow-2xl z-10
                transition-all duration-300 hover:transform hover:scale-105
                object-cover"
            />
            <img
              src="/main-dashboard.png"
              alt="Inventory Preview 2"
              className="absolute top-64 left-16 w-full rounded-lg shadow-2xl z-20
                transition-all duration-300 hover:transform hover:scale-105
                hover:rotate-1 object-cover"
            />
          </div>
        </div>
        
        {/* New Remote Access Section */}
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold">Acesse computadores que estão dentro e fora da rede <span className="font-bold text-3xl text-green-500">remotamente</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nosso software de acesso remoto oferece uma solução robusta e intuitiva 
                para conectar-se a dispositivos remotamente, permitindo a gestão eficiente 
                e segura de sistemas e dados a partir de qualquer local.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
                Faça o Teste Grátis
              </Button>
            </div>
            {/* Right Column - Overlapping Images */}
            <div className="flex-1 relative h-[600px]">
              <img
                src="/remote-1.png"
                alt="Remote Access Preview 1"
                className="absolute top-20 right-8 w-full rounded-lg shadow-2xl z-10
                  transition-all duration-300 hover:transform hover:scale-105
                  object-cover"
              />
              <img
                src="/remote-2.png"
                alt="Remote Access Preview 2"
                className="absolute top-64 left-16 w-full rounded-lg shadow-2xl z-20
                  transition-all duration-300 hover:transform hover:scale-105
                  hover:rotate-1 object-cover"
              />
            </div>
          </div>
            {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
              <Computer className="w-12 h-12 text-green-500 mb-4" />
              <p className="text-sm text-muted-foreground">
                Com o acesso remoto, você pode conectar-se a computadores de qualquer lugar.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
              <Clock className="w-12 h-12 text-green-500 mb-4" />
              <p className="text-sm text-muted-foreground">
                Reduz significativamente o tempo necessário para solucionar problemas técnicos.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
              <Shield className="w-12 h-12 text-green-500 mb-4" />
              <p className="text-sm text-muted-foreground">
                Recursos avançados de segurança, como criptografia de ponta a ponta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold">
              Localize seus <span className="font-bold text-3xl text-green-500">ativos de forma eficaz com Force 1</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A geolocalização do Agente Track, é a solução perfeita para
              empresas que precisam proteger seus ativos e tomar decisões planejadas.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
              Fale com um Especialista
            </Button>
          </div>

          {/* Right Column - Overlapping Images */}
          <div className="flex-1 relative h-[600px]">
            <img
              src="/geolocalizacao.png"
              alt="Geolocation Preview 1"
              className="absolute top-44 right-8 w-full rounded-lg shadow-2xl z-10
                transition-all duration-300 hover:transform hover:scale-105
                object-cover"
            />
            {/* <img
              src="/geolocation-2.png"
              alt="Geolocation Preview 2"
              className="absolute top-64 left-16 w-full rounded-lg shadow-2xl z-20
                transition-all duration-300 hover:transform hover:scale-105
                hover:rotate-1 object-cover"
            /> */}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
            <MapPin className="w-12 h-12 text-green-500 mb-4" />
            <p className="text-sm text-muted-foreground">
              Localize seus ativos de maneira eficaz.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
            <Shield className="w-12 h-12 text-green-500 mb-4" />
            <p className="text-sm text-muted-foreground">
              Mantenha seus ativos seguros com cercas virtuais.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
            <History className="w-12 h-12 text-green-500 mb-4" />
            <p className="text-sm text-muted-foreground">
              Rastreie o histórico dos seus ativos.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
            <FileText className="w-12 h-12 text-green-500 mb-4" />
            <p className="text-sm text-muted-foreground">
              Gere relatórios de auditoria para tomar decisões assertivas.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column - Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">
            Faça Deploy em <span className="font-bold text-3xl text-green-500">10 minutos</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O deploy de software é uma tarefa essencial para qualquer empresa, no entanto uma tarefa 
            demorada e complexa. O Force1 transforma e automatiza a instalação e desinstalação de 
            softwares, tornando mais rápido e fácil.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
            Faça o Teste Grátis
          </Button>
        </div>

        {/* Right Column - Overlapping Images */}
        <div className="flex-1 relative h-[600px]">
          <img
            src="/deploy-1.png"
            alt="Software Deploy Preview 1"
            className="absolute top-20 right-8 w-full rounded-lg shadow-2xl z-10
              transition-all duration-300 hover:transform hover:scale-105
              object-cover"
          />
          <img
            src="/deploy-2.png"
            alt="Software Deploy Preview 2"
            className="absolute top-64 left-16 w-full rounded-lg shadow-2xl z-20
              transition-all duration-300 hover:transform hover:scale-105
              hover:rotate-1 object-cover"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
          <RefreshCw className="w-12 h-12 text-green-500 mb-4" />
          <p className="text-sm text-muted-foreground">
            Atualiza softwares com facilidade e segurança.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
          <Package className="w-12 h-12 text-green-500 mb-4" />
          <p className="text-sm text-muted-foreground">
            Instale e desinstale softwares de forma rápida e consistente.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
          <Settings className="w-12 h-12 text-green-500 mb-4" />
          <p className="text-sm text-muted-foreground">
            Gerencie o ciclo de vida dos softwares de forma eficiente.
          </p>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column - Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">
            Centralize, <span className="font-bold text-3xl text-green-500">Automatize e Otimize</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Automatize a configuração de seus computadores e aumente a produtividade da sua 
            equipe de TI. Tenha a chave para aumentar a segurança dos ativos da sua empresa.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
            Fale com um Consultor
          </Button>
        </div>

        {/* Right Column - Overlapping Images */}
        <div className="flex-1 relative h-[600px]">
          <img
            src="/security-1.png"
            alt="Security Preview 1"
            className="absolute top-20 right-8 w-full rounded-lg shadow-2xl z-10
              transition-all duration-300 hover:transform hover:scale-105
              object-cover"
          />
          <img
            src="/security-2.png"
            alt="Security Preview 2"
            className="absolute top-64 left-16 w-full rounded-lg shadow-2xl z-20
              transition-all duration-300 hover:transform hover:scale-105
              hover:rotate-1 object-cover"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
          <Usb className="w-12 h-12 text-green-500 mb-4" />
          <p className="text-sm text-muted-foreground">
            Políticas de Bloqueio de USB.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
          <Globe className="w-12 h-12 text-green-500 mb-4" />
          <p className="text-sm text-muted-foreground">
            Politicas de Bloqueio de Site.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
          <Lock className="w-12 h-12 text-green-500 mb-4" />
          <p className="text-sm text-muted-foreground">
            Politicas de Criptografia de Disco.
          </p>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column - Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">
            Crie campanhas de comunicação <span className="font-bold text-3xl text-green-500">eficazes e impactantes</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Criar campanhas de comunicação que sejam eficazes e impactantes pode ser um desafio. 
            Com planejamento e execução cuidadosas, o módulo de Mensageria do Force1 pode ser uma 
            ferramenta poderosa para ajudar sua empresa a alcançar objetivos.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
            Faça o Teste Grátis
          </Button>
        </div>

        {/* Right Column - Overlapping Images */}
        <div className="flex-1 relative h-[600px]">
          <img
            src="/messaging-1.png"
            alt="Messaging Preview 1"
            className="absolute top-20 right-8 w-full rounded-lg shadow-2xl z-10
              transition-all duration-300 hover:transform hover:scale-105
              object-cover"
          />
          <img
            src="/messaging-2.png"
            alt="Messaging Preview 2"
            className="absolute top-64 left-16 w-full rounded-lg shadow-2xl z-20
              transition-all duration-300 hover:transform hover:scale-105
              hover:rotate-1 object-cover"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
          <MessageSquare className="w-12 h-12 text-green-500 mb-4" />
          <p className="text-sm text-muted-foreground">
            Crie campanhas personalizadas que atendam às necessidades específicas.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
          <Layout className="w-12 h-12 text-green-500 mb-4" />
          <p className="text-sm text-muted-foreground">
            Incorpore elementos visuais e de interatividade para tornar suas campanhas mais atraentes e envolventes.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 border border-input rounded-lg bg-card">
          <BarChart3 className="w-12 h-12 text-green-500 mb-4" />
            <p className="text-sm text-muted-foreground">
              Monitorar os resultados de suas campanhas para medir seu impacto.
            </p>
          </div>
        </div>
    </section>
      
        <div className="bg-muted py-16 px-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu gerenciamento de TI?</h2>
          <p className="text-muted-foreground mb-8">
            Junte-se a milhares de empresas gerenciando seus ativos de TI de forma eficiente
          </p>
          <Button size="lg" className="bg-primary">
            Comece Agora
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20 py-8 text-center text-muted-foreground">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <nav className="flex gap-8">
              <a 
                href="/about" 
                className="hover:text-green-500 transition-colors duration-200"
              >
                Sobre Nós
              </a>
              <a 
                href="/terms" 
                className="hover:text-green-500 transition-colors duration-200"
              >
                Termos de Uso
              </a>
              <a 
                href="/privacy" 
                className="hover:text-green-500 transition-colors duration-200"
              >
                Política de Privacidade
              </a>
            </nav>
            <p>© 2024 Infonova Tecnologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}