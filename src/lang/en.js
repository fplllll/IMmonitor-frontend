export default {
  route: {
    myDashboard: 'Dashboard',
    EquipmentTable: 'Equipment Overview',
    MotorRealTime: 'Motor Monitoring',
    motorRealTime: 'Motor Monitoring',
    SymmetryAnalysis: 'Symmetry Analysis',
    DQZtransform: 'DQZ Transform',
    TrendAnalysis: 'Trend Analysis',
    HarmonicsAnalysis: 'Harmonics Analysis',
    EnvelopeAnalysis: 'Envelope Analysis',
    MotorDiagnosis: 'Motor Diagnosis',
    dashboard: 'Dashboard',
    introduction: 'Introduction',
    documentation: 'Documentation',
    guide: 'Guide',
    DiagnosisStandard: 'Diagnosis Standard',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    componentIndex: 'Introduction',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link'
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Motor Platform Login',
    logIn: 'Log in',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases it is not suitable to use v-permission, such as element Tab component or el-table-column and other asynchronous rendering dom cases which can only be achieved by manually setting the v-if.'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading pdf.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },

  myDashboard: {
    statisticsExcellent: 'Excellent Motor',
    statisticsGood: 'Good Motor',
    statisticsModerate: 'Moderate Motor',
    statisticsPoor: 'Poor Motor',
    healthIndicator: 'Health Indicator',
    thd: 'THD',
    imbalance: 'Imbalance',
    frequency: 'Frequency',
    amplitude: 'Amplitude',
    trend: 'Recent Total Harmonic Distortion Trend',
    radarChart: 'Current Features',
    warningBar: 'Equipment Warning Ratio',
    compsBar: 'Equipment Components Statistic',
    warningTable: 'Warning Logger',
    warningCalendar: 'Warning Calendar',
    warningTabDescription: 'Desciption',
    warningTabMotorID: 'Motor',
    warningTabTime: 'Time',
    warningTabSeverity: 'Severity',
    statuCardTitle: 'Induction Motor Monitoring',
    dbTableCount: 'Database Table Count',
    dbTableVolume: 'Database Volume',
    cpuUsage: 'CPU Usage',
    memoryUsage: 'Memory Usage',
    treeMap: 'Equipment Tree Map'
  },
  eqTable: {
    index: 'Index',
    name: 'Equip Name',
    sn: 'Serial Number',
    healthIndicator: 'Health Indicator',
    admin: 'Administrator',
    statu: 'Statu',
    lrTime: 'Last Repair Time',
    operation: 'Operations',
    edit: 'Edit',
    retrieve: 'More Info',
    realTime: 'Monitor',
    dialogTitle: 'Edit Equipment Information',
    dialogName: 'Equipment Name',
    dialogLRtime: 'Last Repair Time',
    dialogCancleButton: 'Cancle',
    dialogConfirmButton: 'Confirm'
  },
  realTime: {
    refresh: 'Automatically Refresh',
    unrefresh: 'Closing Automatically Refresh',
    change: 'Change Motor',
    updateTime: 'Update Time',
    samplingRate: 'Sampling Rate',
    packID: 'Signal Pack ID',
    statu: 'Statu',
    motorDetail: 'Motor Details',
    statorDetail: 'Stator Details',
    rotorDetail: 'Rotor Details',
    bearingDetail: 'Bearing Details',
    threePhase: 'Three Phase Current Signals',
    threePhaseSpec: 'Three Phase Current Specturms',
    gaugeTitle: 'Induction Motor Features',
    tabTitle: 'Current Parameters',
    amplitude: 'Amplitude(A)',
    frequency: 'Frequency(Hz)',
    initialPhase: 'Initial Phase Angel(°)'
  },
  symmetry: {
    step1: 'Chossing an Motor Object and Date range',
    step2: 'Chossing an Analyze Object',
    step3: 'Analysis Result',
    formName: 'Motor Name',
    dateRange: 'Date Range',
    helpText: 'Need trend-analysis analysis to assist in the selection of signal object?',
    formId: 'Signal ID(Optional)',
    previousBtn: 'Back to previous Step',
    packlistBtn: 'Get Signal List',
    analysisBtn: 'Analyze the signal',
    diranalysisBtn: 'Directly Analyze',
    helptext1: 'OR DIRECTLY',
    timeColumn: 'Collected Time',
    rpmColumn: 'Rotational Speed',
    dbindexColumn: 'Index in the Database',
    posChartTitle: 'Positive Sequence',
    negChartTitle: 'Negative Sequence',
    zeroChartTitle: 'Zero Sequence',
    uploarChartTitle: 'U phase Polar',
    vploarChartTitle: 'V phase Polar',
    wploarChartTitle: 'W phase Polar'
  },
  dqanalysis: {
    step3: 'DQ vector Analysis Result',
    dqDQComponent: 'DQ Vector Figure',
    threephase: 'Three Phase Current',
    envelope: 'Envelope'
  },
  trend: {
    step3: 'Motor Feature Trend',
    analysisBtn: 'Get Motor Feature Trend',
    UtabTitle: 'U phase RootMeanSquare/Max/Min Trend',
    VtabTitle: 'V phase RootMeanSquare/Max/Min Trend',
    WtabTitle: 'W phase RootMeanSquare/Max/Min Trend',
    THDTitle: 'Total Harmonic Distortion Trend',
    ImbalanceTitle: 'Imbalance Trend'
  },
  harmonic: {
    step3: 'Harmonic Analysis Result',
    harmonicComp: 'Harmonics Components',
    ShaftBearing: 'Shaft Bearing',
    StatorWinding: 'Stator Winding',
    ShellandBearing: 'Shell and Bearing',
    Airgapeccentricity: 'Air gap eccentricity',
    UnbalancedShaft: 'Unbalanced Shaft',
    Bearingforeignmatter: 'Bearing foreign matter',
    BrokenConnector: 'Broken Connector',
    BeltSystem: 'Belt System',
    column: 'Harmonics',
    MainHarmonic: 'Main Harmonic Order',
    Order: 'Order',
    contribution: 'Contribution',
    cum_contribution: 'Cumulate contribution',
    OptionalHarmonics: 'Optional Harmonic Orders',
    component: 'Motor Component'
  },
  envelope: {
    figureTitle: 'phase Raw Signal and Envelope'
  },
  diagnosis: {
    BRB: 'Broken Rotor Bar',
    BRM: 'Boiled Rotor Shaft',
    HEALTH: 'No Fault',
    RMAM: 'Bearing Fault',
    resultPrefix: 'The fault pattern of the selected signal is'
  }
}
