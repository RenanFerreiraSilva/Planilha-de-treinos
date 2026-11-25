import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SavedWorkout } from '../Form';
import {
  CardHeader,
  CardsGrid,
  Content,
  HomeContainer,
  TopBar,
  WorkoutCard,
  WorkoutExercises,
} from './styles';

const STORAGE_KEY = '@catalogo-treinos:workouts';

export function Home() {
  const navigate = useNavigate();

  const [workouts, setWorkouts] = useState<SavedWorkout[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];

    try {
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return [];

      return parsed.map((workout) => ({
        ...workout,
        exercicios: Array.isArray(workout.exercicios) ? workout.exercicios : [],
      }));
    } catch {
      return [];
    }
  });

  function handleDeleteWorkout(id: string) {
    const updated = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  return (
    <HomeContainer>
      <Content>
        <TopBar>
          <h1>Meus Treinos</h1>
          <button type="button" onClick={() => navigate('/')}>
            + Novo Treino
          </button>
        </TopBar>

        {workouts.length === 0 ? (
          <p>Nenhum treino cadastrado ainda. Clique em "+ Novo Treino" para começar.</p>
        ) : (
          <CardsGrid>
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id}>
                <CardHeader>
                  <span>Treino {workout.divisao}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteWorkout(workout.id)}
                  >
                    Excluir
                  </button>
                </CardHeader>

                <h2>{workout.grupoMuscular}</h2>

                {workout.exercicios?.length > 0 && (
                  <WorkoutExercises>
                    {workout.exercicios.map((ex) => (
                      <li key={ex.id}>
                        <span>{ex.nome}</span>
                        <strong>{ex.series}</strong>
                      </li>
                    ))}
                  </WorkoutExercises>
                )}
              </WorkoutCard>
            ))}
          </CardsGrid>
        )}
      </Content>
    </HomeContainer>
  );
}