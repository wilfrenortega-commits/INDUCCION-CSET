export type UserRole = 'aprendiz' | 'instructor';

export interface ApprenticeProgress {
  id: string;
  nombre: string;
  documento: string;
  email: string;
  ficha: string;
  programa: string;
  centro: string;
  regional: string;
  foto?: string;
  fechaInicio: string;
  ultimoAcceso: string;
  progresoGlobal: number; // 0 a 100
  modulosCompletados: string[]; // ids de módulos
  quizzesCompletados: Record<string, { puntaje: number; maxPuntaje: number; aprobado: boolean; fecha: string }>;
  casosCompletados: string[];
  insignias: string[];
  estado: 'Completado' | 'En Progreso' | 'En Riesgo';
  observacionesInstructor?: string[];
}

export interface ModuleSection {
  id: string;
  titulo: string;
  duracionEstimada: string;
  icono: string;
  descripcion: string;
  unidades: LessonUnit[];
}

export interface LessonUnit {
  id: string;
  titulo: string;
  tipo: 'lectura' | 'interactivo' | 'simulador' | 'audio' | 'quiz';
  contenidoResumen: string;
}

export interface QuizQuestion {
  id: string;
  pregunta: string;
  contexto?: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
  articuloRelacionado?: string;
}

export interface QuizData {
  id: string;
  titulo: string;
  descripcion: string;
  moduloId: string;
  preguntas: QuizQuestion[];
  puntajeMinimoAprobacion: number;
  insigniaDesbloqueable: string;
}

export interface CaseStudy {
  id: string;
  titulo: string;
  descripcionCaso: string;
  tipoFaltaCandidata: 'Académica' | 'Disciplinaria' | 'Mixta';
  aprendizInvolucrado: string;
  programa: string;
  antecedentes: string;
  pruebasAportadas: string[];
  opcionesSancion: {
    id: string;
    decision: string;
    calificacionFalta: 'Leve' | 'Grave' | 'Gravísima' | 'No constituye falta';
    medida: 'Llamado de atención verbal' | 'Plan de mejoramiento' | 'Condicionamiento de matrícula' | 'Cancelación de matrícula' | 'Archivo del caso';
    esCorrecta: boolean;
    argumentacionJuridica: string;
  }[];
}

export interface SenaSymbolInfo {
  id: string;
  nombre: string;
  significado: string;
  elementos: {
    nombre: string;
    significado: string;
    descripcion: string;
  }[];
}

export interface Badge {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  modulo: string;
  color: string;
}
