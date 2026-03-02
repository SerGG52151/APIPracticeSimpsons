import type { Character } from '../lib/api';

const API_IMAGE = "https://cdn.thesimpsonsapi.com/1280";

type CaracterCardProps = {
  character: Character;
};

export function CaracterCard({ character }: CaracterCardProps) {
    console.log('Rendering CaracterCard for character: %s', character.name);
    return (
    <div className="max-w-md min-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1">
      <img
        src={API_IMAGE + character.portrait_path}
        alt={character.name}
        className="scale-75 center w-full "
      />
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{character.name}</h2>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded-full mr-2">Edad: {character.age ?? 'Desconocida'}</span>
            <span className={`inline-block px-2 py-1 rounded-full text-xs ${character.status === 'Alive' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
              {character.status}
            </span>
          </div>
        </div>

        <h3 className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">Frases</h3>
        <ul className="mt-2 list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
          {character.phrases.slice(0, 5).map((phrase, index) => (
            <li key={index} className="truncate">{phrase}</li>
          ))}
          {character.phrases.length > 5 && (
            <li className="text-xs text-gray-500">+{character.phrases.length - 5} más</li>
          )}
        </ul>
      </div>
    </div>
  );
}