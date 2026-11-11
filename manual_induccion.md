# MANUAL DE USUARIO Y GUÍA TÉCNICA
## Portal Integral de Inducción Institucional SENA
**Ficha 2829104 ADSO (Análisis y Desarrollo de Software)**  
**Institución:** Servicio Nacional de Aprendizaje (SENA)  
**Versión del Prototipo:** 2.6 (Actualizado con Reglamento del Aprendiz vigente - Acuerdo 007 de 2012 y directrices de Formación Profesional Integral)

---

## 1. Introducción y Propósito de la Herramienta
El **Portal Integral de Inducción Institucional SENA** es un prototipo web interactivo diseñado para facilitar el proceso de inducción de los nuevos aprendices de la cohorte. La herramienta centraliza el conocimiento normativo (Reglamento del Aprendiz), la apropiación de los símbolos patrios e institucionales, el dominio del ecosistema tecnológico (Zajuna, Sofia Plus, Sennova) y la evaluación de competencias mediante un sistema seguro con doble rol (Aprendiz e Instructor).

---

## 2. Arquitectura de Accesos y Roles

El portal implementa un modelo de control de acceso diferenciado para garantizar la confidencialidad de la información y la correcta auditoría por parte del instructor encargado:

### 2.1. Portal del Aprendiz (Acceso Confidencial Individual)
* **Objetivo:** Permite a cada aprendiz acceder de forma privada a su propio perfil, calificaciones, insignias y progreso, sin exponer los datos ni calificaciones de otros compañeros (privacidad estricta).
* **Métodos de Ingreso:**
  1. **Inicio de Sesión por Documento:** El aprendiz ingresa su número de documento de identidad (ej. `1098765432`). Si ya está registrado en el almacenamiento local, el sistema recupera su expediente y progreso exacto.
  2. **Registro de Perfil Limpio:** Si es un nuevo aprendiz, cuenta con un formulario guiado con marcadores de posición y pistas de llenado para registrar su Nombre Completo, Documento, Correo Institucional (`@misena.edu.co`), Ficha y Programa de Formación, guardando su perfil y redirigiéndolo de inmediato al prototipo.

### 2.2. Portal del Instructor (Acceso Docente Autorizado)
* **Objetivo:** Permite al instructor encargado de la ficha auditar el progreso global de la cohorte, revisar evidencias, emitir observaciones pedagógicas y verificar quiénes han completado los módulos y cuestionarios.
* **Credenciales de Acceso Genéricas:**
  * **Usuario:** `instructor` (o `clara.duarte`)
  * **Contraseña:** `sena2026`
* **Funcionalidades del Dashboard Docente:**
  * Listado de aprendices matriculados con su estado y porcentaje de avance global.
  * Panel de estadísticas de la cohorte (Promedio de avance, aprendices al día, en riesgo o finalizados).
  * Opción para agregar observaciones de seguimiento directamente en el expediente del aprendiz.

---

## 3. Módulos de Formación y Contenidos

El prototipo se divide en 4 módulos interactivos fundamentales:

### Módulo 01: Identidad, Símbolos y Cultura SENA
* **Historia y Misión:** Origen del SENA fundado en 1957 por Rodolfo Martínez Tono.
* **Explorador Interactivo del Escudo:** Con sus tres sectores económicos:
  * *La Rueda Dentada (Piñón):* Industria y manufactura.
  * *El Caduceo:* Comercio y servicios.
  * *El Rayo y Haz Agropecuario:* Sector primario y agroindustrial.
* **Himno Oficial del SENA:** Reproductor interactivo con la letra completa (Coro y las 4 estrofas) y selector de versiones.
* **Valores Institucionales:** Integridad, respeto, compromiso, solidaridad y equidad aplicados en casos prácticos.

### Módulo 02: Reglamento del Aprendiz y Convivencia (Acuerdo 007 de 2012 Actualizado)
* **Derechos Actualizados (Art. 7):** Formación integral de calidad, inducción, carné físico/digital, debido proceso, conectividad en plataformas y enfoque diferencial.
* **Deberes y Prohibiciones (Art. 9 y 10):** Porte de carné, asistencia, EPP, autoría propia (cero plagio de código o textos asistido por IA), convivencia digital y respeto en redes oficiales.
* **Clasificación de Faltas:** Faltas Académicas vs. Disciplinarias graduadas en Leves, Graves y Gravísimas.
* **Ruta del Debido Proceso (6 Pasos):** Desde el informe de novedad, citación, audiencia de descargos, deliberación del comité, acto administrativo del subdirector y recurso de reposición.
* **Simulador de Comités de Evaluación:** Taller práctico de rol donde el aprendiz vota y asume decisiones ante casos simulados de plagio, inasistencia o daños a equipos, recibiendo retroalimentación jurídica.

### Módulo 03: Ecosistema Tecnológico y Bienestar
* **Plataformas Oficiales:** Guías de apropiación para LMS Zajuna, Sofia Plus, correo institucional y repositorio de evidencias.
* **Oportunidades de Crecimiento:** Semilleros de investigación (Sennova), etapas productivas (contrato de aprendizaje, proyecto productivo, pasantía), monitorías y apoyos de sostenimiento.

### Módulo 04: Evaluación Integral y Constancia
* **Cuestionarios de Validación (Quizzes):** Preguntas de opción múltiple con calificación inmediata.
* **Insignias Digitales:** Condecoraciones virtuales por módulos aprobados.
* **Constancia Oficial de Inducción:** Generación automática del certificado institucional con datos del aprendiz, código QR de verificación, fecha de expedición y botón de impresión en PDF.

---

## 4. Características Técnicas y de Interfaz
* **Diseño Institucional:** Paleta de colores oficial SENA (Verde `#39A900`, Azul Oscuro `#00324D`).
* **Símbolos Oficiales:** Uso del isotipo vectorial oficial y escudo en alta resolución (`https://www.sena.edu.co/assets/escudo-CKAC4aSg.png`).
* **Modo Oscuro / Claro:** Transición fluida con efecto de desenfoque (`backdrop-blur`).
* **Persistencia Local:** Almacenamiento seguro en `localStorage` para preservar perfiles de aprendices y registros de avance.

---
*Manual redactado y generado automáticamente para el Portal de Inducción SENA - Ficha 2829104 ADSO.*
