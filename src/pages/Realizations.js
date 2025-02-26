"use client"

import { useState, useEffect, useCallback } from "react"
import "./css/Realizations.css"

function Realizations() {
  // Przykładowe dane projektów
  const allProjects = [
    {
      id: 1,
      title: "Strona dla firmy XYZ",
      description: "Nowoczesna strona internetowa z systemem CMS dla firmy z branży technologicznej.",
      fullDescription:
        "Zaprojektowaliśmy i wdrożyliśmy kompleksową stronę internetową dla firmy XYZ, lidera w branży technologicznej. Strona zawiera zaawansowany system CMS, który umożliwia łatwe zarządzanie treścią, blog firmowy oraz integrację z mediami społecznościowymi. Projekt został zrealizowany zgodnie z najnowszymi trendami w projektowaniu stron internetowych, z naciskiem na responsywność i szybkość działania.",
      image: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      category: "Strony WWW",
      technologies: ["React", "Node.js", "MongoDB"],
      completionDate: "Styczeń 2023",
      clientName: "XYZ Technologies",
    },
    {
      id: 2,
      title: "Sklep internetowy ABC",
      description: "Kompleksowy sklep online z integracją płatności i systemem zarządzania zamówieniami.",
      fullDescription:
        "Stworzyliśmy zaawansowany sklep internetowy dla firmy ABC, specjalizującej się w sprzedaży produktów elektronicznych. Sklep posiada intuicyjny interfejs użytkownika, zaawansowane filtry produktów, system rekomendacji oraz pełną integrację z popularnymi bramkami płatności. Dodatkowo, wdrożyliśmy system zarządzania zamówieniami, który automatyzuje procesy logistyczne i usprawnia pracę działu obsługi klienta.",
      image: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      category: "E-commerce",
      technologies: ["Shopify", "JavaScript", "PHP"],
      completionDate: "Marzec 2023",
      clientName: "ABC Electronics",
    },
    {
      id: 3,
      title: "Blog podróżniczy",
      description: "Responsywny blog z galerią zdjęć i mapą odwiedzonych miejsc.",
      fullDescription:
        "Zaprojektowaliśmy i wdrożyliśmy blog podróżniczy dla znanego influencera. Blog zawiera interaktywną mapę odwiedzonych miejsc, zaawansowaną galerię zdjęć z funkcją zoom oraz system komentarzy. Całość została zoptymalizowana pod kątem SEO, co przyczyniło się do znacznego wzrostu ruchu organicznego. Blog jest w pełni responsywny i dostosowany do urządzeń mobilnych.",
      image: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      category: "Blog",
      technologies: ["WordPress", "CSS", "jQuery"],
      completionDate: "Kwiecień 2023",
      clientName: "TravelWithMe",
    },
    {
      id: 4,
      title: "Aplikacja mobilna FitLife",
      description: "Aplikacja do śledzenia aktywności fizycznej i planowania treningów.",
      fullDescription:
        "Stworzyliśmy aplikację mobilną FitLife, która pomaga użytkownikom śledzić aktywność fizyczną i planować treningi. Aplikacja oferuje personalizowane plany treningowe, śledzenie postępów, integrację z urządzeniami fitness oraz społeczność, w której użytkownicy mogą się wzajemnie motywować. Aplikacja jest dostępna na platformy iOS i Android, a jej interfejs został zaprojektowany z myślą o maksymalnej intuicyjności i wygodzie użytkowania.",
      image: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      category: "Aplikacje mobilne",
      technologies: ["React Native", "Firebase", "Redux"],
      completionDate: "Czerwiec 2023",
      clientName: "FitLife Inc.",
    },
    {
      id: 5,
      title: "Portal informacyjny LocalNews",
      description: "Portal z aktualnościami lokalnymi i systemem komentarzy.",
      fullDescription:
        "Zaprojektowaliśmy i wdrożyliśmy portal informacyjny LocalNews, który dostarcza najświeższe informacje lokalne. Portal posiada zaawansowany system zarządzania treścią, który umożliwia szybkie publikowanie artykułów, system komentarzy z moderacją oraz integrację z mediami społecznościowymi. Całość została zoptymalizowana pod kątem szybkości ładowania i SEO.",
      image: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      category: "Portale",
      technologies: ["Next.js", "GraphQL", "PostgreSQL"],
      completionDate: "Lipiec 2023",
      clientName: "LocalNews Media",
    },
    {
      id: 6,
      title: "System rezerwacji RestaurantBook",
      description: "System online do rezerwacji stolików w restauracjach.",
      fullDescription:
        "Stworzyliśmy kompleksowy system rezerwacji online dla sieci restauracji RestaurantBook. System umożliwia klientom rezerwację stolików w czasie rzeczywistym, wybór preferowanej lokalizacji oraz menu. Dla właścicieli restauracji, system oferuje panel administracyjny z raportami, statystykami oraz możliwością zarządzania dostępnością stolików. Całość została zintegrowana z systemem POS używanym w restauracjach.",
      image: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      category: "Systemy webowe",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      completionDate: "Sierpień 2023",
      clientName: "RestaurantBook Chain",
    },
  ]

  // Stan komponentu
  const [projects, setProjects] = useState(allProjects)
  const [activeFilter, setActiveFilter] = useState("Wszystkie")
  const [selectedProject, setSelectedProject] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Pobieranie unikalnych kategorii z projektów
  const categories = ["Wszystkie", ...new Set(allProjects.map((project) => project.category))]

  // Filtrowanie projektów
  const filterProjects = (category) => {
    setActiveFilter(category)
    if (category === "Wszystkie") {
      setProjects(allProjects)
    } else {
      setProjects(allProjects.filter((project) => project.category === category))
    }
  }

  // Otwieranie modalu ze szczegółami projektu
  const openProjectDetails = (project) => {
    setSelectedProject(project)
    setModalOpen(true)
    document.body.style.overflow = "hidden" // Blokowanie przewijania strony pod modalem
  }

  // Zamykanie modalu
  const closeModal = useCallback(() => {
    setModalOpen(false)
    document.body.style.overflow = "auto" // Przywracanie przewijania strony
  }, [])

  // Obsługa klawisza Escape do zamykania modalu
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [closeModal])

  return (
    <div className="realizations-page">
      <div className="realizations-header">
        <h1>Realizacje</h1>
        <p className="subtitle">
          Poznaj nasze najnowsze projekty i rozwiązania, które stworzyliśmy dla naszych klientów.
        </p>
      </div>

      <div className="filter-container">
        <span className="filter-label">Filtruj:</span>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${activeFilter === category ? "active" : ""}`}
            onClick={() => filterProjects(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="project-overlay">
                <button className="view-project-btn" onClick={() => openProjectDetails(project)}>
                  Zobacz szczegóły
                </button>
              </div>
            </div>
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal ze szczegółami projektu */}
      {modalOpen && selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>

            <div className="modal-image">
              <img src={selectedProject.fullImage || selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="modal-info">
              <span className="modal-category">{selectedProject.category}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>

              <div className="modal-details">
                <div className="modal-detail-item">
                  <strong>Klient:</strong> {selectedProject.clientName}
                </div>
                <div className="modal-detail-item">
                  <strong>Data realizacji:</strong> {selectedProject.completionDate}
                </div>
                <div className="modal-detail-item">
                  <strong>Technologie:</strong> {selectedProject.technologies.join(", ")}
                </div>
              </div>

              <div className="modal-description">
                <h3>O projekcie</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>

              <div className="modal-actions">
                <button className="modal-action-btn primary">Zobacz live</button>
                <button className="modal-action-btn secondary">Podobny projekt</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Realizations

