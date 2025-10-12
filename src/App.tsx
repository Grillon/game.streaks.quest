import { useEffect, useState } from 'react';
import { Scroll, Sword, Shield, Coins, Users, Twitter } from 'lucide-react';
import fantomeBaton from './assets/characters/fantome_baton.png';
import villageoisBaton from './assets/characters/villageois_baton.png';
import villageoisUndead from './assets/characters/villageois_baton_undead.png';
import guerrierBaton from './assets/characters/guerrier_baton.png';
import guerrierIron from './assets/characters/guerrier.png';
import voleurBaton from './assets/characters/voleur_baton.png';
import voleurUndead from './assets/characters/voleur_baton_undead.png';
import magicien from './assets/characters/magicien.png';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative bg-black"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffff' fill-opacity='0.03'%3E%3Crect x='0' y='0' width='8' height='8'/%3E%3Crect x='16' y='0' width='8' height='8'/%3E%3Crect x='32' y='0' width='8' height='8'/%3E%3Crect x='8' y='8' width='8' height='8'/%3E%3Crect x='24' y='8' width='8' height='8'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <div className="mb-12 flex justify-center gap-8 items-end">
            <img
              src={villageoisBaton}
              alt="Villager"
              className="w-24 h-24 md:w-32 md:h-32 pixelated animate-bounce"
              style={{
                animationDelay: '0s',
                animationDuration: '2s',
                imageRendering: 'pixelated'
              }}
            />
            <img
              src={guerrierBaton}
              alt="Warrior"
              className="w-32 h-32 md:w-40 md:h-40 pixelated animate-bounce"
              style={{
                animationDelay: '0.3s',
                animationDuration: '2s',
                imageRendering: 'pixelated'
              }}
            />
            <img
              src={magicien}
              alt="Magician"
              className="w-24 h-24 md:w-32 md:h-32 pixelated animate-bounce"
              style={{
                animationDelay: '0.6s',
                animationDuration: '2s',
                imageRendering: 'pixelated'
              }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'monospace', textShadow: '0 0 20px #00ffff, 0 0 40px #00ffff', color: '#00ffff' }}>
            Streaks.quest
          </h1>
          <p className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'monospace', color: '#ff00ff' }}>
            A ritual, a game, a proof of engagement
          </p>
          <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'monospace' }}>
            Streaks.quest transforms your gm/gn into proof of engagement
            and gives you a soulbound reputation NFT.
          </p>

          <button
            onClick={() => scrollToSection('how-it-works')}
            className="bg-transparent border-2 hover:bg-cyan-500/20 text-white px-8 py-4 text-xl rounded transition-all transform hover:scale-105"
            style={{ fontFamily: 'monospace', borderColor: '#00ffff', boxShadow: '0 0 10px #00ffff', color: '#00ffff' }}
          >
            Join the Quest
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Scroll className="w-8 h-8" style={{ color: '#00ffff' }} />
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-24 relative bg-black"
        style={{
          opacity: Math.min(1, scrollY / 300),
          transform: `translateY(${Math.max(0, 100 - scrollY / 3)}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'monospace', color: '#00ffff', textShadow: '0 0 10px #00ffff' }}>
            How It Works
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'monospace' }}>
            First you get your evolutive soulbound NFT which depends on your reputation.
          </p>
            

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex items-center gap-8 p-8 rounded border-2" style={{ borderColor: '#333333', backgroundColor: '#0a0a0a' }}>
              <img src={villageoisUndead} alt="Ghost" className="w-24 h-24 pixelated flex-shrink-0" style={{ imageRendering: 'pixelated' }} />
              <img src={voleurUndead} alt="Ghost" className="w-24 h-24 pixelated flex-shrink-0" style={{ imageRendering: 'pixelated' }} />
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'monospace', color: '#888888' }}>
                  Level -1: Undead
                </h3>
                <p className="text-lg text-gray-400">
                  💀 Undead — Restless souls with uncertain motives. Their actions confuse the oracles of ElizaOS.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 p-8 rounded border-2" style={{ borderColor: '#333333', backgroundColor: '#0a0a0a' }}>
              <img src={fantomeBaton} alt="Ghost" className="w-24 h-24 pixelated flex-shrink-0" style={{ imageRendering: 'pixelated' }} />
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'monospace', color: '#888888' }}>
                  Level 0: Ghost
                </h3>
                <p className="text-lg text-gray-400">
                  👻 Young spirits, not yet anchored in time. Their identities are less than a year old.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 p-8 rounded border-2" style={{ borderColor: '#00ffff', backgroundColor: '#0a0a0a', boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)' }}>
              <div className="flex gap-4 flex-shrink-0">
                <img src={villageoisBaton} alt="Villager" className="w-20 h-20 pixelated" style={{ imageRendering: 'pixelated' }} />
                <img src={guerrierBaton} alt="Warrior" className="w-20 h-20 pixelated" style={{ imageRendering: 'pixelated' }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'monospace', color: '#00ffff' }}>
                  Level 1: Trusted Hero
                </h3>
                <p className="text-lg text-gray-400">
                  🧙 Fully incarnated beings whose presence and history inspire trust in the eyes of ElizaOS.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-xl mt-16 italic" style={{ fontFamily: 'monospace', color: '#ff00ff' }}>
            "Start as a wandering soul. Build trust through activity. Become a legend of the Web3 realm."
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'monospace', color: '#00ffff', textShadow: '0 0 10px #00ffff' }}>
            Streak Levels
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'monospace' }}>
            Then you can streak naturally your gm/gn on social network.
          </p>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded border-2" style={{ borderColor: '#ff00ff', backgroundColor: '#0a0a0a', boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-12 h-12" style={{ color: '#ff00ff' }} />
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'monospace', color: '#ff00ff' }}>Wooden Weapons</h3>
              </div>
              <p className="text-gray-400 mb-4">
                <span className="font-bold" style={{ color: '#ff00ff' }}>&lt; 1 week streak</span>
              </p>
              <p className="text-gray-300">
                New adventurers wield basic wooden weapons. Build your streak to forge stronger gear.
              </p>
              <img src={villageoisBaton} alt="Wooden weapon" className="w-20 h-20 mx-auto mt-6 pixelated" style={{ imageRendering: 'pixelated' }} />
            </div>

            <div className="p-8 rounded border-2" style={{ borderColor: '#00ffff', backgroundColor: '#0a0a0a', boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)' }}>
              <div className="flex items-center gap-4 mb-4">
                <Sword className="w-12 h-12" style={{ color: '#00ffff' }} />
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'monospace', color: '#00ffff' }}>Iron Weapons</h3>
              </div>
              <p className="text-gray-400 mb-4">
                <span className="font-bold" style={{ color: '#00ffff' }}>&ge; 1 week streak</span>
              </p>
              <p className="text-gray-300">
                Prove your dedication. Veterans earn iron weapons and enhanced status in the realm.
              </p>
              <img src={guerrierIron} alt="Iron weapon" className="w-20 h-20 mx-auto mt-6 pixelated" style={{ imageRendering: 'pixelated' }} />
            </div>
          </div>

          <p className="text-center text-xl mt-12 italic" style={{ fontFamily: 'monospace', color: '#ff00ff' }}>
            Your streaks forge your weapon.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'monospace', color: '#00ffff', textShadow: '0 0 10px #00ffff' }}>
            Character Classes
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded border-2 transition-all transform hover:scale-105" style={{ borderColor: '#444444', backgroundColor: '#0a0a0a' }}>
              <img src={villageoisBaton} alt="Villager" className="w-32 h-32 mx-auto mb-6 pixelated" style={{ imageRendering: 'pixelated' }} />
              <h3 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: 'monospace', color: '#ffaa00' }}>
                <Users className="w-6 h-6 inline mr-2" />
                Villager
              </h3>
              <p className="text-gray-300 text-center">
                The Web3 Enthusiast. Community builders and supporters who strengthen the ecosystem through participation and engagement.
              </p>
            </div>

            <div className="p-8 rounded border-2 transition-all transform hover:scale-105" style={{ borderColor: '#444444', backgroundColor: '#0a0a0a' }}>
              <img src={guerrierBaton} alt="Warrior" className="w-32 h-32 mx-auto mb-6 pixelated" style={{ imageRendering: 'pixelated' }} />
              <h3 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: 'monospace', color: '#ff4444' }}>
                <Sword className="w-6 h-6 inline mr-2" />
                Warrior
              </h3>
              <p className="text-gray-300 text-center">
                The Builder. Developers and creators who forge the future with code and innovation, constructing the Web3 infrastructure.
              </p>
            </div>

            <div className="p-8 rounded border-2 transition-all transform hover:scale-105" style={{ borderColor: '#444444', backgroundColor: '#0a0a0a' }}>
              <img src={magicien} alt="Magician" className="w-32 h-32 mx-auto mb-6 pixelated" style={{ imageRendering: 'pixelated' }} />
              <h3 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: 'monospace', color: '#4444ff' }}>
                <Scroll className="w-6 h-6 inline mr-2" />
                Magician
              </h3>
              <p className="text-gray-300 text-center">
                The Financier. Masters of tokens, liquidity, and market dynamics who weave economic magic through DeFi protocols.
              </p>
            </div>

            <div className="p-8 rounded border-2 transition-all transform hover:scale-105" style={{ borderColor: '#444444', backgroundColor: '#0a0a0a' }}>
              <img src={voleurBaton} alt="Thief" className="w-32 h-32 mx-auto mb-6 pixelated" style={{ imageRendering: 'pixelated' }} />
              <h3 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: 'monospace', color: '#aa44ff' }}>
                <Coins className="w-6 h-6 inline mr-2" />
                Thief
              </h3>
              <p className="text-gray-300 text-center">
                The Biz Dev / Influencer. Networkers and dealmakers who navigate social channels and forge strategic alliances.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative border-t border-b" style={{ borderColor: '#222222' }}>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8" style={{ fontFamily: 'monospace', color: '#00ffff', textShadow: '0 0 10px #00ffff' }}>
            Privacy & Trust
          </h2>
          <p className="text-center text-xl mb-16" style={{ fontFamily: 'monospace', color: '#ff00ff' }}>
            Your reputation, your data, your control
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-8 rounded border-2" style={{ borderColor: '#333333', backgroundColor: '#0a0a0a' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'monospace', color: '#00ffff' }}>
                MVP: Simple & Fair
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                For the initial version, your reputation is based on <span style={{ color: '#ff00ff' }}>account age</span> and <span style={{ color: '#ff00ff' }}>referrals</span>.
                Simple, transparent, and fair.
              </p>
            </div>

            <div className="p-8 rounded border-2" style={{ borderColor: '#00ffff', backgroundColor: '#0a0a0a', boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'monospace', color: '#00ffff' }}>
                Future: ElizaOS Evaluation
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                In the future, <span style={{ color: '#00ffff' }}>ElizaOS</span> will evaluate your reputation through advanced on-chain analysis.
                Smarter, decentralized, and more comprehensive.
              </p>
            </div>

            <div className="p-8 rounded border-2" style={{ borderColor: '#ff00ff', backgroundColor: '#0a0a0a', boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'monospace', color: '#ff00ff' }}>
                Zero-Knowledge Privacy
              </h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-lg">
                  <span style={{ color: '#ff00ff' }}>✓</span> No private database - your data stays yours
                </p>
                <p className="text-lg">
                  <span style={{ color: '#ff00ff' }}>✓</span> Only evaluation results are encrypted and stored on-chain
                </p>
                <p className="text-lg">
                  <span style={{ color: '#ff00ff' }}>✓</span> Only you can read your full reputation data
                </p>
                <p className="text-lg">
                  <span style={{ color: '#ff00ff' }}>✓</span> Share proofs via re-encryption when you choose
                </p>
              </div>
            </div>

            <div className="p-8 rounded border-2" style={{ borderColor: '#333333', backgroundColor: '#0a0a0a' }}>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'monospace', color: '#00ffff' }}>
                Frictionless & Non-Intrusive
              </h3>
              <p className="text-lg text-gray-300 text-center">
                No KYC. No invasive data collection. Just <span style={{ color: '#00ffff' }}>natural social activity</span> and <span style={{ color: '#ff00ff' }}>your consent</span>.
                <br />You remain the master of your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'monospace', color: '#00ffff', textShadow: '0 0 10px #00ffff' }}>
            Prove Your Consistency
          </h2>
          <p className="text-2xl mb-12" style={{ fontFamily: 'monospace', color: '#ff00ff' }}>
            Join Streaks.quest
          </p>

          <a
            href="https://streaks.quest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 hover:bg-cyan-500/20 text-white px-12 py-5 text-2xl rounded transition-all transform hover:scale-105"
            style={{ fontFamily: 'monospace', borderColor: '#00ffff', boxShadow: '0 0 20px #00ffff', color: '#00ffff' }}
          >
            Start Now
          </a>
        </div>
      </section>

      <footer className="bg-black py-12 border-t" style={{ borderColor: '#222222' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <a
              href="#"
              className="transition-colors flex items-center gap-2"
              style={{ fontFamily: 'monospace', color: '#666666' }}
            >
              <Scroll className="w-5 h-5" />
              Learn more (whitepaper)
            </a>
            <a
              href="https://twitter.com/streaksquest"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors flex items-center gap-2"
              style={{ fontFamily: 'monospace', color: '#666666' }}
            >
              <Twitter className="w-5 h-5" />
              Follow us on X
            </a>
            <a
              href="#"
              className="transition-colors flex items-center gap-2"
              style={{ fontFamily: 'monospace', color: '#666666' }}
            >
              <Users className="w-5 h-5" />
              Join the community (Discord)
            </a>
          </div>

          <p className="text-center" style={{ fontFamily: 'monospace', color: '#444444' }}>
            Streaks.quest - The Game of Trust
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
