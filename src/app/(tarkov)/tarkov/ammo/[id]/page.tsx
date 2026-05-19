"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface AmmoDetails {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image512pxLink: string;
  properties: {
    damage: number;
    penetrationPower: number;
    fragmentationChance: number;
    recoilModifier: number;
    initialSpeed: number;
  };
  buyFor: {
    price: number;
    currency: string;
    vendor: { name: string };
  }[];
}

export default function AmmoIdPage() {
  const params = useParams();
  const router = useRouter();
  const [item, setItem] = useState<AmmoDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAmmoData = async () => {
      const query = `
        {
          item(id: "${params.id}") {
            id
            name
            shortName
            description
            image512pxLink
            properties {
              ... on ItemPropertiesAmmo {
                damage
                penetrationPower
                fragmentationChance
                recoilModifier
                initialSpeed
              }
            }
            buyFor {
              price
              currency
              vendor { name }
            }
          }
        }
      `;

      try {
        const res = await fetch('https://api.tarkov.dev/graphql', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ query }),
          cache: 'no-store'
        });
        const json = await res.json();
        if (json.data?.item) {
          setItem(json.data.item);
        }
      } catch (err) {
        console.error("Ошибка загрузки патрона:", err);
      } finally {
        boxLoading(false);
      }
    };

    if (params.id) fetchAmmoData();
  }, [params.id]);

  function boxLoading(state: boolean) {
    setLoading(state);
  }

  if (loading) return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-orange-500 font-black animate-pulse tracking-widest uppercase italic">Синхронизация данных...</div>
      </div>
      <Footer />
    </div>
  );

  if (!item) return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <p className="text-zinc-500 font-black uppercase tracking-tighter">Патрон не найден</p>
      </div>
      <Footer />
    </div>
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Header />
      
      <div className="flex-grow max-w-4xl mx-auto px-6 py-20 w-full">
        <button 
          onClick={() => router.back()}
          className="mb-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors border-b border-zinc-900 pb-1"
        >
          ← Назад к таблице
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="relative group mx-auto md:mx-0 w-full max-w-sm">
            <div className="absolute -inset-1 bg-orange-500/10 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-zinc-900/30 border border-zinc-800 p-10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <img src={item.image512pxLink} alt={item.name} className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" draggable="false" />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none text-white">{item.shortName}</h1>
            <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-10">{item.name}</p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-lg">
                <span className="block text-[9px] text-zinc-500 font-black uppercase mb-2 tracking-widest">Урон</span>
                <span className="text-5xl font-black italic text-white leading-none">{item.properties?.damage}</span>
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-lg">
                <span className="block text-[9px] text-zinc-500 font-black uppercase mb-2 tracking-widest">Пробитие</span>
                <span className="text-5xl font-black italic text-orange-500 leading-none">{item.properties?.penetrationPower}</span>
              </div>
            </div>

            <div className="space-y-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
              <div className="flex justify-between border-b border-zinc-900 pb-3">
                <span>Начальная скорость</span>
                <span className="text-white italic">{item.properties?.initialSpeed} м/с</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-3">
                <span>Фрагментация</span>
                <span className="text-white italic">{((item.properties?.fragmentationChance || 0) * 100).toFixed(0)}%</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-3">
                <span>Модификатор отдачи</span>
                <span className="text-white italic">{item.properties?.recoilModifier}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-black uppercase italic mb-8 tracking-tighter border-l-4 border-orange-500 pl-4">Где приобрести</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {item.buyFor?.filter(offer => offer.vendor?.name !== 'Flea Market').map((offer, i) => (
              <div key={i} className="flex justify-between items-center bg-zinc-900/20 border border-zinc-800 p-5 rounded-lg hover:bg-zinc-900/40 transition-all group">
                <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white">{offer.vendor?.name}</span>
                <span className="text-xl font-black text-orange-500 italic">
                  {offer.price?.toLocaleString()} {offer.currency === 'RUB' ? '₽' : offer.currency}
                </span>
              </div>
            ))}
            {(!item.buyFor || item.buyFor.filter(offer => offer.vendor?.name !== 'Flea Market').length === 0) && (
              <div className="col-span-full py-8 text-center border-2 border-dashed border-zinc-900 rounded-xl">
                <p className="text-zinc-700 italic uppercase text-[10px] font-black tracking-widest">Только находка в рейде / Крафт</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}