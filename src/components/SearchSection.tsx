
import { SearchIcon } from "lucide-react";

export const SearchSection = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8"
          alt="Maldivas paradise beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
          Una nueva manera de viajar
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Encuentra tu próximo destino
        </p>
        
        <div className="bg-white rounded-full shadow-lg p-2 flex items-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <input
            type="text"
            placeholder="¿A dónde quieres ir?"
            className="flex-1 px-4 py-2 outline-none text-gray-800"
          />
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors">
            <SearchIcon size={20} />
            <span>Buscar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
