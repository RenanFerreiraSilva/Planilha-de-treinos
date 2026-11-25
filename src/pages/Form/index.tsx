import type { FormEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import goggins from '../../assets/goggins.jpeg';
import {
  AddExerciseButton,
  ExerciseList,
  ExerciseRow,
  FieldGroup,
  FormCard,
  FormWrapper,
  SecondaryButton,
  SubmitButton,
} from './styles';

export interface ExerciseItem {
  id: string;
  nome: string;
  series: string;
}

export interface SavedWorkout {
  id: string;
  divisao: string;
  grupoMuscular: string;
  exercicios: ExerciseItem[];
}

const STORAGE_KEY = '@catalogo-treinos:workouts';

export function Form() {
  const navigate = useNavigate();

  const [divisao, setDivisao] = useState('');
  const [grupoMuscular, setGrupoMuscular] = useState('');
  const [exercicioNome, setExercicioNome] = useState('');
  const [series, setSeries] = useState('');
  const [exercicios, setExercicios] = useState<ExerciseItem[]>([]);
  const [salvoAviso, setSalvoAviso] = useState(false);

  const [hasSavedWorkouts, setHasSavedWorkouts] = useState<boolean>(() => {
    const dadosAtuais = localStorage.getItem(STORAGE_KEY);
    if (!dadosAtuais) return false;
    const lista: SavedWorkout[] = JSON.parse(dadosAtuais);
    return lista.length > 0;
  });

  function handleAddExercise() {
    const nomeLimpo = exercicioNome.trim();
    const seriesLimpas = series.trim();

    if (!nomeLimpo || !seriesLimpas) return;

    setExercicios((prev) => [
      ...prev,
      { id: crypto.randomUUID(), nome: nomeLimpo, series: seriesLimpas },
    ]);

    setExercicioNome('');
    setSeries('');
  }

  function handleRemoveExercise(id: string) {
    setExercicios((prev) => prev.filter((item) => item.id !== id));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const divisaoLimpa = divisao.trim().toUpperCase();
    const grupoLimpo = grupoMuscular.trim();

    if (!divisaoLimpa || !grupoLimpo) return;

    const dadosAtuais = localStorage.getItem(STORAGE_KEY);
    const listaAtual: SavedWorkout[] = dadosAtuais ? JSON.parse(dadosAtuais) : [];

    const novoTreino: SavedWorkout = {
      id: crypto.randomUUID(),
      divisao: divisaoLimpa,
      grupoMuscular: grupoLimpo,
      exercicios,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify([...listaAtual, novoTreino]));

    setHasSavedWorkouts(true);
    setDivisao('');
    setGrupoMuscular('');
    setExercicioNome('');
    setSeries('');
    setExercicios([]);
    setSalvoAviso(true);
    setTimeout(() => setSalvoAviso(false), 2500);
  }

  return (
    <FormWrapper $bgImage={goggins}>
      <FormCard onSubmit={handleSubmit}>
        <h2>Cadastrar Treino</h2>

        <FieldGroup>
          <label htmlFor="divisao">Divisão do treino (A, B, C, D...)</label>
          <input
            id="divisao"
            type="text"
            maxLength={4}
            value={divisao}
            onChange={(e) => setDivisao(e.target.value)}
            placeholder="Ex: A, B, C ou D"
            required
          />
        </FieldGroup>

        <FieldGroup>
          <label htmlFor="grupoMuscular">Grupo muscular / foco</label>
          <input
            id="grupoMuscular"
            type="text"
            value={grupoMuscular}
            onChange={(e) => setGrupoMuscular(e.target.value)}
            placeholder="Ex: Costas, Peito, Pernas..."
            required
          />
        </FieldGroup>

        <ExerciseRow>
          <FieldGroup>
            <label htmlFor="exercicio">Exercício</label>
            <input
              id="exercicio"
              type="text"
              value={exercicioNome}
              onChange={(e) => setExercicioNome(e.target.value)}
              placeholder="Ex: Puxada frontal"
            />
          </FieldGroup>

          <FieldGroup>
            <label htmlFor="series">Séries</label>
            <input
              id="series"
              type="text"
              value={series}
              onChange={(e) => setSeries(e.target.value)}
              placeholder="Ex: 4x10"
            />
          </FieldGroup>

          <AddExerciseButton type="button" onClick={handleAddExercise}>
            +
          </AddExerciseButton>
        </ExerciseRow>

        {exercicios.length > 0 && (
          <ExerciseList>
            {exercicios.map((item) => (
              <li key={item.id}>
                <span>
                  {item.nome} — <strong>{item.series}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveExercise(item.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ExerciseList>
        )}

        <SubmitButton type="submit">Salvar treino</SubmitButton>

        {hasSavedWorkouts && (
          <SecondaryButton type="button" onClick={() => navigate('/home')}>
            Meus treinos salvos
          </SecondaryButton>
        )}

        {salvoAviso && <p>Treino salvo no localStorage!</p>}
      </FormCard>
    </FormWrapper>
  );
}