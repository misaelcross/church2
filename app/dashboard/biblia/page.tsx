import { loadBibleARC } from './_components/biblia';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import SearchInput from '../../../components/search-input';

export default async function BibliaPage() {
  const bibleData = await loadBibleARC();
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bíblia ARC</h1>
      <div className="flex gap-4 mb-6">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione o livro" />
          </SelectTrigger>
          <SelectContent>
            {bibleData.map((book: { name: string }) => (
              <SelectItem key={book.name} value={book.name}>
                {book.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <SearchInput />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">1 Reis 9</h3>
        <div className="space-y-1">
          <>
            {bibleData.find((book: { name: string }) => book.name === '1 Reis')?.chapters
              .find((chapter: { chapter: number }) => chapter.chapter === 9)?.verses.map((verse: { verse: number, text: string }) => (
                <p key={verse.verse} className="text-gray-500">
                  {verse.verse}. {verse.text}
                </p>
              )) || (
                <>
                  <p className="text-red-500">Erro ao carregar versículos</p>
                  <p className="text-gray-500">Nenhum versículo encontrado</p>
                </>
              )}
          </>
        </div>
      </div>
    </div>
  );
}
