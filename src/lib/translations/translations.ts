export const translations: Record<string, { [key: string]: string }> = {
  en: {
    // General
    eventTitle: 'Event Title',
    location: 'Location',
    startDate: 'Start Date',
    eventType: 'Event Type',
    virtual: 'Online',
    onsite: 'In Person',
    search: 'Search',
    searchByTitle: 'Search by title',
    selectLocation: 'Select location...',
    welcome: 'Welcome',
    hideFilters: 'Hide Filters',
    showMoreFilters: 'Show More Filters',
    selectEventType: 'Select event type...',
    switchToSpanish: 'Switch to Spanish',
    switchToEnglish: 'Switch to English',
    appName: 'Yiqi',
    events: 'Events',
    communities: 'Communities',
    login: 'Log in',
    myAccount: 'My Account',
    menu: 'Menu',
    openMenu: 'Open menu',
    contactUs: 'Contact Us',
    terms: 'Terms',
    privacy: 'Privacy',
    security: 'Security',
    // Hero Section
    heroSubtitle: 'The Future of Events',
    heroTitle1: 'Create Unforgettable',
    heroTitle2: 'Experiences',
    heroDescription:
      'Connect, celebrate, and create memories. Our platform makes it easy to discover and organize events that bring people together.',
    heroCTA: 'Create your first event',
    feature1Title: 'Smart Scheduling',
    feature1Description:
      'AI-powered event scheduling that adapts to your preferences and availability.',
    feature2Title: 'Community Driven',
    feature2Description:
      'Connect with like-minded people and build lasting relationships.',
    // Features Section
    featuresTitle: 'Platform Features',
    featuresDescription:
      'Everything you need to build and manage thriving communities, all in one place.',
    featuresCTA: 'Open source and built for community builders',
    featuresViewOnGitHub: 'View on GitHub',
    // Community Highlights
    highlightsTitle: 'Featured Communities',
    highlightsSubtitle:
      'Join these amazing communities and connect with like-minded people',
    eventsNear: 'Events near',
    seeAllEvents: 'See all events',
    noEventsFound: 'No events found',
    // Account Dropdown
    guestUser: 'Guest User',
    organization: 'Organization',
    profile: 'Profile',
    settings: 'Settings',
    signOut: 'Sign out',
    defaultAvatarAlt: 'User Avatar',
    // Welcome NewOrg
    welcomeScreenTitle: 'Welcome, New Admin!',
    welcomeScreenDescription: "Let's get your organization set up and running!",
    welcomeScreenProgressTitle: 'Your progress',
    welcomeOf: 'of',
    welcomeScreenTasks: 'tasks completed',
    welcomeScreenTasksImportContacts: 'Import your contacts',
    welcomeScreenTasksImportDescription:
      'Get started by importing your contact list',
    welcomeScreenTasksSetupPayments: 'Setup payments',
    welcomeScreenTasksPaymentDescription:
      'Configure your payment settings to receive funds',
    welcomeScreenTasksCreateEvents: 'Create new events',
    welcomeScreenTasksEventDescription:
      'Start planning and creating your first event',
    welcomeScreenTasksSendNotifications: 'Send notifications',
    welcomeScreenTasksNotificationDescription:
      'Reach out to your contacts with important updates',
    // Stripe Connect
    stripeConnectTitle: 'Connect your billing accounts',
    stripeConnectDescription: 'Get ready for take off',
    stripeConnectOnboardingDescription:
      'Add information to start accepting money',
    stripeConnectCompleteOnboarding: 'Complete your onboarding',
    stripeConnectInfoText:
      'Our system uses Stripe to process payments for you. Please connect your accounts if you want to charge for your events.',
    stripeConnectSignUp: 'Sign up',
    stripeConnectCreatingAccount: 'Creating a connected account...',
    stripeConnectError: 'Error',
    stripeConnectErrorDescription: 'Something went wrong!',
    stripeConnectAccountId: 'Your connected account ID:',
    stripeConnectOnboardingExited:
      'The Account Onboarding component has exited',
    // Sidebar
    chat: 'Chat',
    contacts: 'Contacts',
    organizers: 'Organizers',
    billing: 'Billing',
    logOut: 'Log out',
    // Sidebar dropdown
    switchOrganization: 'Switch Organization',
    // Chat
    chats: 'Chats',
    clickToContinue: 'Click one chat to continue',
    // Events Page
    createNewEvent: 'Create New Event',
    // Contact for
    contactsFor: 'Contacts for',
    backToDashboard: 'Back to Organization Dashboard',
    organizationNotFound: 'Organization not found',
    // Constact downlopad cv
    exampleCsvContent: `email,phone,name,age,city\njohn.doe@example.com,123456789,John Doe,25,New York\njane.smith@example.com,987654321,Jane Smith,30,Los Angeles\nrobert.brown@example.com,567890123,Robert Brown,35,Chicago\nemily.davis@example.com,345678901,Emily Davis,28,Miami\nmichael.wilson@example.com,123098456,Michael Wilson,40,Seattle\nsarah.johnson@example.com,789012345,Sarah Johnson,32,Houston\ndavid.martinez@example.com,456789012,David Martinez,29,Dallas\nlinda.hernandez@example.com,890123456,Linda Hernandez,34,San Diego\njames.lopez@example.com,234567890,James Lopez,26,Phoenix\npatricia.gonzalez@example.com,678901234,Patricia Gonzalez,38,San Francisco`,
    exampleCsvFilename: 'example.csv',
    downloadCsvTemplate: 'Download CSV Import Template',
    // Bulk Send
    bulkSendButton: 'Bulk Send',
    bulkSendTitle: 'Bulk Send',
    bulkSendLog: 'Bulk send initiated with message:',
    typeYourMessage: 'Type your message here.',
    whatsapp: 'WhatsApp',
    email: 'Email',
    send: 'Send',
    messageValidation: 'Message must be at least 1 character.',
    // Event List
    createNewEvents: 'Create New Events',
    // Add Organizer
    addOrganizer: 'Add Organizer',
    addNewOrganizer: 'Add New Organizer',
    searchUsers: 'Search users by name or email',
    selectedUser: 'Selected User',
    viewer: 'Viewer',
    admin: 'Admin',
    cancel: 'Cancel',
    add: 'Add',
    selectUserError: 'Please select a user',
    addOrganizerError: 'Failed to add organizer. Please try again.',
    profileSettings: 'Profile Settings',
    payments: 'Payments',
    history: 'History',
    tickets: 'Tickets',
    // Profile Settings
    name: 'Name',
    phoneNumber: 'Phone Number',
    company: 'Company',
    position: 'Position',
    bio: 'Bio',
    saveChanges: 'Save Changes',
    saving: 'Saving...',
    profileUpdated: 'Profile updated successfully',
    error: 'Error',
    failedToUpdate: 'Failed to update profile. Please try again.',
    enterYourName: 'Enter your name',
    enterYourEmail: 'Enter your Email',
    enterYourPhone: 'Enter your Phone Number',
    enterYourCompany: 'Enter your Company',
    enterYourPosition: 'Enter your Position',
    tellUsAboutYourself: 'Tell us about yourself',
    // Delete Account
    deleteAccount: 'Delete Account',
    areYouSure: 'Are you absolutely sure?',
    actionCannotBeUndone:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    deleteAccountConfirmation: 'Delete Account',
    deleting: 'Deleting...',
    accountDeleted: 'Account Deleted',
    accountDeletedDescription:
      'Your account has been successfully deleted. You have been logged out.',
    errorInDelete: 'ERROR:',
    errorDeleting: 'Failed to delete account',
    somethingWentWrong: 'Something went wrong',
    // Change Picture
    changePicture: 'Change Picture',
    dropHere: 'Drop here',
    stopCommunications: 'Stop Communications',
    disableCommunications:
      'Disable all marketing communications and newsletters',
    role: 'Role',
    updateFailed: 'Failed to update profile',
    enterCompany: 'Enter your company',
    enterPosition: 'Enter your position',
    x: 'X',
    enterYourX: 'Enter your X username',
    linkedin: 'LinkedIn',
    enterLinkedinURL: 'Enter your LinkedIn URL',
    instagram: 'Instagram',
    enterInstagramURL: 'Enter your Instagram URL',
    website: 'Website',
    enterWebsiteURL: 'Enter your website URL',
    communityName: 'Tech Innovators',
    communityDescription: 'A community of tech enthusiasts driving innovation.',
    eventTitle1: 'Tech Expo 2024',
    eventLocation1: 'San Francisco, CA',
    eventTitle2: 'AI Conference',
    eventLocation2: 'New York, NY',
    roleAdmin: 'ADMIN',
    roleViewer: 'VIEWER',
    queueJobDescription: 'Process event registrations',
    customFocus: 'Innovation in AI and Robotics',
    customPartnerships: 'Collaborating with major tech companies',
    featureCommunityManagement: 'Community Management',
    featureCommunityManagementDescription:
      'Efficiently manage your community members, roles, and permissions with our intuitive tools.',
    featureAnalyticsInsights: 'Analytics & Insights',
    featureAnalyticsInsightsDescription:
      "Make data-driven decisions with comprehensive analytics about your community's engagement.",
    featureEventOrganization: 'Event Organization',
    featureEventOrganizationDescription:
      'Plan, schedule, and manage community events seamlessly with integrated calendar features.',
    featureDiscussionForums: 'Discussion Forums',
    featureDiscussionForumsDescription:
      'Foster meaningful conversations with customizable discussion spaces and moderation tools.',
    featureCustomization: 'Customization',
    featureCustomizationDescription:
      "Tailor the platform to match your community's unique needs and branding requirements.",
    featureCommunityEngagement: 'Community Engagement',
    featureCommunityEngagementDescription:
      'Build stronger connections with tools designed to increase member participation and interaction.',
    importing: 'Importing...',
    importContacts: 'Import Contacts',
    noOrganizationFound: 'No organization found',
    eventNotFound: 'Event not found',
    eventTitleInEventDetails: 'Event Title:',
    backToEvents: 'Back to Events',
    deleteEvent: 'Delete Event',
    eventDetails: 'Event Details',
    endDate: 'End Date',
    description: 'Description',
    eventManagement: 'Event Management',
    attendees: 'Attendees',
    communications: 'Communications',
    eventRegistrations: 'Event Registrations',
    eventCommunications: 'Event Communications',
    sendNewCommunication: 'Send New Communication',
    status: 'Status',
    action: 'Action',
    approve: 'Approve',
    reject: 'Reject',
    failedToSaveEvent: 'Failed to save event: ',
    selectAnImage: 'Select an image',
    eventName: 'Event Name',
    start: 'Start',
    end: 'End',
    selectTimezone: 'Select timezone',
    capacity: 'Capacity',
    unlimited: 'Unlimited',
    hide: 'Hide',
    edit: 'Edit',
    free: 'Free',
    stripeAccount: 'Stripe Account',
    networkingSettings: 'Networking Settings',
    // LinkedIn Connect Component
    linkedinEnhanceTitle: 'Enhance Your Networking Experience',
    linkedinEnhanceDescription:
      'Connect your LinkedIn account to unlock powerful networking features',
    linkedinBenefitMatchTitle: 'Personalized Match Making',
    linkedinBenefitMatchDescription:
      'Get curated lists of people you should meet at every event you attend',
    linkedinBenefitHighlightsTitle: 'Community Highlights',
    linkedinBenefitHighlightsDescription:
      'Stay updated with important highlights tailored to your interests',
    linkedinBenefitContentTitle: 'Personalized Content',
    linkedinBenefitContentDescription:
      'Receive content recommendations based on your interactions and preferences',
    linkedinConnectButton: 'Link LinkedIn Account',
    linkedinDisconnectButton: 'Disconnect LinkedIn Account',
    linkedinConnectedMessage:
      'Your LinkedIn account is connected. You can disconnect at any time.',
    linkedinDisconnectedToast: 'LinkedIn account disconnected',
    linkedinDisconnectedToastDesc: 'You can reconnect at any time',
    linkedinErrorToast: 'Error disconnecting LinkedIn account',
    linkedinErrorToastDesc: 'Please try again later',
    // Community Page
    noLogoAvailable: 'No logo available',
    noCommunitiesFound: 'No communities found at this time.',
    // Community Details
    //members
    members: 'Members',
    membersOrganizedBy: 'Organized by',
    membersAnd: 'and',
    membersOther: 'other',
    membersOrganizationLogo: 'Organization Logo',
    memberOrganizers: 'Organizers',
    //banner
    bannerMembers: 'Members',
    bannerOrganizedBy: 'Organized by',
    bannerAnd: 'and',
    bannerOther: 'other',
    bannerOrganizationLogo: 'Organization Logo',
    //navigation
    navigationAbout: 'About',
    navigationMembers: 'Members',
    //about
    aboutShowLess: 'Show less',
    aboutLoadMore: 'Load more',
    //events
    eventsUpcomingEvents: 'Upcoming Events',
    eventsPastEvents: 'Past Events',
    // Networking Profile
    networkingProfileTitle: 'Enhanced Networking Profile',
    networkingProfileDescription:
      'Help us create meaningful connections for you by sharing more about your professional journey. This information will be used to match you with relevant opportunities, events, and other professionals who share your interests and goals.',
    networkingBenefits:
      'Benefits include personalized event recommendations, curated networking opportunities, and tailored content based on your professional profile.',

    // Form Labels
    professionalMotivations: 'Professional Motivations',
    professionalMotivationsLabel: 'What drives you to succeed?',
    professionalMotivationsPlaceholder:
      'Share what fuels your passion—innovation, leadership, helping others, personal growth...',

    communicationStyle: 'Communication Style',
    communicationStyleLabel:
      'How would you describe your communication and interaction style?',
    communicationStylePlaceholder:
      'Are you more of a listener or speaker? Do you prefer collaboration or independent work?',

    professionalValues: 'Professional Values',
    professionalValuesLabel: 'What values guide your professional life?',
    professionalValuesPlaceholder:
      'Integrity, creativity, teamwork, social responsibility...',

    careerAspirations: 'Career Aspirations',
    careerAspirationsLabel: 'What are your long-term professional goals?',
    careerAspirationsPlaceholder:
      'Leadership roles, specialization, entrepreneurship...',

    significantChallenge: 'Professional Challenge',
    significantChallengeLabel:
      "Share a significant professional challenge you've overcome",
    significantChallengePlaceholder:
      'What was the challenge and what did you learn from it?',

    saveNetworkingProfile: 'Save Networking Profile',
    networkingProfileSaved: 'Networking profile updated successfully',
    networkingProfileError: 'Failed to update networking profile'
  },
  es: {
    // General
    eventTitle: 'Nombre del Evento',
    location: 'Lugar',
    startDate: 'Fecha de Inicio',
    eventType: 'Tipo de Evento',
    virtual: 'En línea',
    onsite: 'Presencial',
    search: 'Buscar',
    searchByTitle: 'Buscar por nombre',
    selectLocation: 'Seleccionar el lugar...',
    welcome: 'Bienvenido',
    hideFilters: 'Ocultar Filtros',
    showMoreFilters: 'Mostrar Más Filtros',
    selectEventType: 'Seleccionar tipo de evento...',
    switchToSpanish: 'Cambiar a Español',
    switchToEnglish: 'Cambiar a Inglés',
    appName: 'Yiqi',
    events: 'Eventos',
    communities: 'Comunidades',
    login: 'Iniciar sesión',
    myAccount: 'Mi Cuenta',
    menu: 'Menú',
    openMenu: 'Abrir menú',
    contactUs: 'Contáctanos',
    terms: 'Términos',
    privacy: 'Privacidad',
    security: 'Seguridad',
    // Hero Section
    heroSubtitle: 'El Futuro de los Eventos',
    heroTitle1: 'Crea Inolvidables',
    heroTitle2: 'Experiencias',
    heroDescription:
      'Conecta, celebra y crea recuerdos. Nuestra plataforma facilita descubrir y organizar eventos que unen a las personas.',
    heroCTA: 'Crea tu primer evento',
    feature1Title: 'Programación Inteligente',
    feature1Description:
      'Planificación de eventos impulsada por IA que se adapta a tus preferencias y disponibilidad.',
    feature2Title: 'Impulsado por la Comunidad',
    feature2Description:
      'Conecta con personas afines y construye relaciones duraderas.',
    // Features Section
    featuresTitle: 'Características de la Plataforma',
    featuresDescription:
      'Todo lo que necesitas para construir y gestionar comunidades exitosas, en un solo lugar.',
    featuresCTA: 'Código abierto y diseñado para constructores de comunidades',
    featuresViewOnGitHub: 'Ver en GitHub',
    // Community Highlights
    highlightsTitle: 'Comunidades Destacadas',
    highlightsSubtitle:
      'Únete a estas increíbles comunidades y conecta con personas afines',
    eventsNear: 'Eventos cerca de ti',
    seeAllEvents: 'Ver todos los eventos',
    noEventsFound: 'No se encontraron eventos',
    // Account Dropdown
    guestUser: 'Usuario Invitado',
    organization: 'Organización',
    profile: 'Perfil',
    settings: 'Configuración',
    signOut: 'Cerrar sesión',
    defaultAvatarAlt: 'Avatar del Usuario',
    // Welcome New Org
    welcomeScreenTitle: '¡Bienvenido, Nuevo Administrador!',
    welcomeScreenDescription: '¡Vamos a poner en marcha tu organización!',
    welcomeScreenProgressTitle: 'Tu progreso',
    welcomeOf: 'de',
    welcomeScreenTasks: 'tareas completadas',
    welcomeScreenTasksImportContacts: 'Importa tus contactos',
    welcomeScreenTasksImportDescription:
      'Comienza importando tu lista de contactos',
    welcomeScreenTasksSetupPayments: 'Configura los pagos',
    welcomeScreenTasksPaymentDescription:
      'Configura tus ajustes de pago para recibir fondos',
    welcomeScreenTasksCreateEvents: 'Crea nuevos eventos',
    welcomeScreenTasksEventDescription:
      'Comienza a planificar y crear tu primer evento',
    welcomeScreenTasksSendNotifications: 'Envía notificaciones',
    welcomeScreenTasksNotificationDescription:
      'Contacta a tus contactos con actualizaciones importantes',
    // Stripe Connect
    stripeConnectTitle: 'Conecta tus cuentas de facturación',
    stripeConnectDescription: 'Prepárate para despegar',
    stripeConnectOnboardingDescription:
      'Agrega la información para comenzar a aceptar pagos',
    stripeConnectCompleteOnboarding: 'Completa tu incorporación',
    stripeConnectInfoText:
      'Nuestro sistema usa Stripe para procesar los pagos. Conecta tus cuentas si deseas cobrar por tus eventos.',
    stripeConnectSignUp: 'Registrarse',
    stripeConnectCreatingAccount: 'Creando una cuenta conectada...',
    stripeConnectError: 'Error',
    stripeConnectErrorDescription: '¡Algo salió mal!',
    stripeConnectAccountId: 'Tu ID de cuenta conectada:',
    stripeConnectOnboardingExited:
      'El componente de incorporación de la cuenta ha salido',
    // Sidebar
    chat: 'Chat',
    contacts: 'Personas',
    organizers: 'Organizadores',
    billing: 'Facturación',
    logOut: 'Cerrar sesión',
    // Sidebar dropdown
    switchOrganization: 'Cambiar Organización',
    // Chat
    chats: 'Chats',
    clickToContinue: 'Haz clic en un chat para continuar',
    // Events Page
    createNewEvent: 'Crear Nuevo Evento',
    // Contact for
    contactsFor: 'Contactos de',
    backToDashboard: 'Volver al Tablero de la Organización',
    organizationNotFound: 'Organización no encontrada',
    // Contact Template Download
    exampleCsvContent: `nombre,correo,telefono,edad,ciudad\njuan.doe@ejemplo.com,123456789,Juan Doe,25,Nueva York\njane.smith@ejemplo.com,987654321,Jane Smith,30,Los Angeles\nroberto.brown@ejemplo.com,567890123,Roberto Brown,35,Chicago\nemilia.davis@ejemplo.com,345678901,Emilia Davis,28,Miami\nmichael.wilson@ejemplo.com,123098456,Michael Wilson,40,Seattle\nsarah.johnson@ejemplo.com,789012345,Sarah Johnson,32,Houston\ndavid.martinez@ejemplo.com,456789012,David Martinez,29,Dallas\nlinda.hernandez@ejemplo.com,890123456,Linda Hernandez,34,San Diego\njames.lopez@ejemplo.com,234567890,James Lopez,26,Fénix\npatricia.gonzalez@ejemplo.com,678901234,Patricia González,38,San Francisco`,
    exampleCsvFilename: 'ejemplo.csv',
    downloadCsvTemplate: 'Descargar plantilla de importación CSV',
    // Bulk Send
    bulkSendButton: 'Envío masivo',
    bulkSendTitle: 'Envío masivo',
    bulkSendLog: 'Envío masivo iniciado con mensaje:',
    typeYourMessage: 'Escribe tu mensaje aquí.',
    whatsapp: 'WhatsApp',
    email: 'Correo electrónico',
    send: 'Enviar',
    messageValidation: 'El mensaje debe tener al menos 1 caracter.',
    // Events List
    createNewEvents: 'Crear nuevos eventos',
    // Add Organizer
    addOrganizer: 'Agregar Organizador',
    addNewOrganizer: 'Agregar Nuevo Organizador',
    searchUsers: 'Buscar usuarios por nombre o correo',
    selectedUser: 'Usuario Seleccionado',
    viewer: 'Espectador',
    admin: 'Administrador',
    cancel: 'Cancelar',
    add: 'Agregar',
    selectUserError: 'Por favor seleccione un usuario',
    addOrganizerError: 'Error al agregar organizador. Intente de nuevo.',
    profileSettings: 'Configuración del perfil',
    payments: 'Pagos',
    history: 'Historial',
    tickets: 'Tickets',
    // Profile Settings
    name: 'Nombre',
    phoneNumber: 'Número de teléfono',
    company: 'Empresa',
    position: 'Cargo',
    bio: 'Biografía',
    saveChanges: 'Guardar cambios',
    saving: 'Guardando...',
    profileUpdated: 'Perfil actualizado con éxito',
    error: 'Error',
    failedToUpdate:
      'Error al actualizar el perfil. Por favor, intente nuevamente.',
    enterYourName: 'Introduce tu nombre',
    enterYourEmail: 'Introduce tu correo electrónico',
    enterYourPhone: 'Introduce tu número de teléfono',
    enterYourCompany: 'Introduce tu empresa',
    enterYourPosition: 'Introduce tu cargo',
    tellUsAboutYourself: 'Cuéntanos sobre ti',
    // Delete Account
    deleteAccount: 'Eliminar Cuenta',
    areYouSure: '¿Estás absolutamente seguro?',
    actionCannotBeUndone:
      'Esta acción no puede deshacerse. Esto eliminará permanentemente tu cuenta y borrará tus datos de nuestros servidores.',
    deleteAccountConfirmation: 'Eliminar Cuenta',
    deleting: 'Eliminando...',
    accountDeleted: 'Cuenta Eliminada',
    accountDeletedDescription:
      'Tu cuenta ha sido eliminada exitosamente. Has sido desconectado.',
    errorInDelete: 'ERROR:',
    errorDeleting: 'No se pudo eliminar la cuenta',
    somethingWentWrong: 'Algo salió mal',
    changePicture: 'Cambiar Foto',
    dropHere: 'Suelta aquí',
    stopCommunications: 'Detener Comunicaciones',
    disableCommunications:
      'Deshabilitar todas las comunicaciones de marketing y boletines',
    role: 'Rol',
    updateFailed: 'No se pudo actualizar el perfil',
    enterCompany: 'Ingresa tu compañía',
    enterPosition: 'Ingresa tu cargo',
    x: 'X',
    enterYourX: 'Ingresa tu nombre de usuario en X',
    linkedin: 'LinkedIn',
    enterLinkedinURL: 'Ingresa tu URL de LinkedIn',
    instagram: 'Instagram',
    enterInstagramURL: 'Ingresa tu URL de Instagram',
    website: 'Sitio web',
    enterWebsiteURL: 'Ingresa tu URL del sitio web',
    manageOrganizersFor: 'Administrar Organizadores para',
    backToOrganizationDashboard: 'Volver al Panel de la Organización',
    communityName: 'Tech Innovators',
    communityDescription:
      'Una comunidad de entusiastas de la tecnología impulsando la innovación.',
    eventTitle1: 'Tech Expo 2024',
    eventLocation1: 'San Francisco, CA',
    eventTitle2: 'AI Conference',
    eventLocation2: 'New York, NY',
    roleAdmin: 'ADMIN',
    roleViewer: 'VIEWER',
    queueJobDescription: 'Procesar registros de eventos',
    customFocus: 'Innovación en IA y Robótica',
    customPartnerships: 'Colaborando con grandes empresas tecnológicas',
    featureCommunityManagement: 'Gestión de la Comunidad',
    featureCommunityManagementDescription:
      'Gestiona de manera eficiente los miembros, roles y permisos de tu comunidad con nuestras herramientas intuitivas.',
    featureAnalyticsInsights: 'Análisis y Perspectivas',
    featureAnalyticsInsightsDescription:
      'Toma decisiones basadas en datos con análisis completos sobre el compromiso de tu comunidad.',
    featureEventOrganization: 'Organización de Eventos',
    featureEventOrganizationDescription:
      'Planifica, programa y gestiona eventos comunitarios de manera fluida con funciones integradas de calendario.',
    featureDiscussionForums: 'Foros de Discusión',
    featureDiscussionForumsDescription:
      'Fomenta conversaciones significativas con espacios de discusión personalizables y herramientas de moderación.',
    featureCustomization: 'Personalización',
    featureCustomizationDescription:
      'Ajusta la plataforma para que se adapte a las necesidades únicas y los requisitos de marca de tu comunidad.',
    featureCommunityEngagement: 'Compromiso Comunitario',
    featureCommunityEngagementDescription:
      'Construye conexiones más fuertes con herramientas diseñadas para aumentar la participación e interacción de los miembros.',
    eventNotFound: 'Evento no encontrado',
    eventTitleInEventDetails: 'Evento: ',
    backToEvents: 'Volver a Eventos',
    deleteEvent: 'Eliminar Evento',
    eventDetails: 'Detalles del Evento',
    endDate: 'Fecha de Fin',
    description: 'Descripción',
    eventManagement: 'Gestión del Evento',
    attendees: 'Asistentes',
    communications: 'Comunicaciones',
    eventRegistrations: 'Registros de Evento',
    eventCommunications: 'Comunicaciones del Evento',
    sendNewCommunication: 'Enviar Nueva Comunicación',
    status: 'Estado',
    action: 'Acción',
    approve: 'Aprobar',
    reject: 'Rechazar',
    failedToSaveEvent: 'Error al guardar el evento: ',
    selectAnImage: 'Selecciona una imagen',
    eventName: 'Nombre del evento',
    start: 'Inicio',
    end: 'Fin',
    selectTimezone: 'Selecciona la zona horaria',
    capacity: 'Capacidad',
    unlimited: 'Ilimitado',
    hide: 'Ocultar',
    edit: 'Editar',
    free: 'Gratis',
    stripeAccountRequired: 'Se requiere cuenta de Stripe',
    stripeSetupInfo:
      'Para cobrar entradas, configura tu cuenta de Stripe en los ajustes de facturación.',
    clickHereStart: 'Haz clic aquí para comenzar',
    close: 'Cerrar',
    creatingEvent: 'Creando Evento...',
    updatingEvent: 'Actualizando Evento...',
    createEvent: 'Crear Evento',
    updateEvent: 'Actualizar Evento',
    importing: 'Importando...',
    importContacts: 'Importar Contactos',
    noOrganizationFound: 'No se encontró la organización',
    networkingSettings: 'Networking',
    // LinkedIn Connect Component
    linkedinEnhanceTitle: 'Mejora tu Experiencia de Networking',
    linkedinEnhanceDescription:
      'Conecta tu cuenta de LinkedIn para desbloquear potentes funciones de networking',
    linkedinBenefitMatchTitle: 'Conexiones Personalizadas',
    linkedinBenefitMatchDescription:
      'Obtén listas seleccionadas de personas que deberías conocer en cada evento al que asistas',
    linkedinBenefitHighlightsTitle: 'Destacados de la Comunidad',
    linkedinBenefitHighlightsDescription:
      'Mantente actualizado con destacados importantes adaptados a tus intereses',
    linkedinBenefitContentTitle: 'Contenido Personalizado',
    linkedinBenefitContentDescription:
      'Recibe recomendaciones de contenido basadas en tus interacciones y preferencias',
    linkedinConnectButton: 'Vincular Cuenta de LinkedIn',
    linkedinDisconnectButton: 'Desconectar Cuenta de LinkedIn',
    linkedinConnectedMessage:
      'Tu cuenta de LinkedIn está conectada. Puedes desconectarla en cualquier momento.',
    linkedinDisconnectedToast: 'Cuenta de LinkedIn desconectada',
    linkedinDisconnectedToastDesc:
      'Puedes volver a conectarla en cualquier momento',
    linkedinErrorToast: 'Error al desconectar la cuenta de LinkedIn',
    linkedinErrorToastDesc: 'Por favor, inténtalo de nuevo más tarde',
    // Community Page
    noLogoAvailable: 'No hay logo disponible',
    noCommunitiesFound: 'No se encontraron comunidades en este momento.',
    // Community Details
    //members
    members: 'Miembros',
    membersOrganizedBy: 'Organizado por',
    membersAnd: 'y',
    membersOther: 'otro',
    membersOrganizationLogo: 'Logo de la Organización',
    memberOrganizers: 'Organizadores',
    //banner
    bannerMembers: 'Miembros',
    bannerOrganizedBy: 'Organizado por',
    bannerAnd: 'y',
    bannerOther: 'otro',
    bannerOrganizationLogo: 'Logo de la Organización',
    //navigation
    navigationAbout: 'Acerca de',
    navigationMembers: 'Miembros',
    //about
    aboutShowLess: 'Mostrar menos',
    aboutLoadMore: 'Cargar más',
    //events
    eventsUpcomingEvents: 'Próximos Eventos',
    eventsPastEvents: 'Eventos Pasados',
    //settings
    settingOrganizationTitle: 'Configuración de la Organización',
    settingsOrganizationUpdated: 'Organización actualizada exitosamente!',
    settingsOrganizationFormName: 'Organización',
    settingsPlaceholderOrganization: 'Andino...',
    settingsDescription: 'Descripción',
    settingsPlaceholderDescription: 'Descripción...',
    settingsOrganizationFormLogo: 'Logo',
    settingsOrganizationAltLogo: 'Logo de la organización',
    settingsOrganizationFormColor: 'Color',
    settingsOrganizationFormUrl: 'Url de',
    settingsOrganizationFormSaved: 'Guardar Cambios',
    // Networking Profile
    networkingProfileTitle: 'Perfil de Networking Mejorado',
    networkingProfileDescription:
      'Ayúdanos a crear conexiones significativas para ti compartiendo más sobre tu viaje profesional. Esta información se utilizará para emparejarte con oportunidades relevantes, eventos y otros profesionales que comparten tus intereses y objetivos.',
    networkingBenefits:
      'Los beneficios incluyen recomendaciones de eventos personalizados, oportunidades de networking seleccionadas y contenido personalizado basado en tu perfil profesional.',

    // Form Labels
    professionalMotivations: 'Motivaciones Profesionales',
    professionalMotivationsLabel: '¿Qué te motiva para tener éxito?',
    professionalMotivationsPlaceholder:
      'Comparte lo que te apasiona—innovación, liderazgo, ayudar a otros, crecimiento personal...',

    communicationStyle: 'Estilo de Comunicación',
    communicationStyleLabel:
      '¿Cómo describirías tu estilo de comunicación y interacción?',
    communicationStylePlaceholder:
      '¿Eres más de un oyente o orador? ¿Prefieres colaborar o trabajar de manera independiente?',

    professionalValues: 'Valores Profesionales',
    professionalValuesLabel: '¿Qué valores guían tu vida profesional?',
    professionalValuesPlaceholder:
      'Integridad, creatividad, trabajo en equipo, responsabilidad social...',

    careerAspirations: 'Metas Profesionales',
    careerAspirationsLabel:
      '¿Cuáles son tus objetivos profesionales a largo plazo?',
    careerAspirationsPlaceholder:
      'Roles de liderazgo, especialización, emprendimiento...',

    significantChallenge: 'Desafío Profesional',
    significantChallengeLabel:
      'Comparte un desafío profesional significativo que has superado',
    significantChallengePlaceholder:
      '¿Cuál fue el desafío y qué aprendiste de él?',

    saveNetworkingProfile: 'Guardar Perfil de Networking',
    networkingProfileSaved: 'Perfil de networking actualizado exitosamente',
    networkingProfileError: 'Error al actualizar el perfil de networking'
  }
}
