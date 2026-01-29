import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { SensoryProvider } from './context/SensoryContext';

// Navigation
import { BottomNavigation } from './components/BottomNavigation';

// Screens - Auth
import { SplashScreen } from './screens/SplashScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignUpScreen';
import { ForgotPasswordScreen } from './screens/ForgotPasswordScreen';
import { UserProfileSetupScreen } from './screens/UserProfileSetupScreen';
import { SensoryPreferenceSetupScreen } from './screens/SensoryPreferenceSetupScreen';

// Screens - Main Navigation (Home, Calm, Guides, Settings)
import { MainHomeScreen } from './screens/MainHomeScreen';
import { MainCalmScreen } from './screens/MainCalmScreen';
import { MainGuidesScreen } from './screens/MainGuidesScreen';
import { MainSettingsScreen } from './screens/MainSettingsScreen';

// Screens - Legacy/Feature Screens
import { HomeScreen } from './screens/HomeScreen';
import { DailyCalmActivitiesScreen } from './screens/DailyCalmActivitiesScreen';
import { FocusModeScreen } from './screens/FocusModeScreen';
import { RelaxationModeScreen } from './screens/RelaxationModeScreen';
import { QuietSpaceScreen } from './screens/QuietSpaceScreen';
import { VisualComfortScreen } from './screens/VisualComfortScreen';
import { SoundControlScreen } from './screens/SoundControlScreen';
import { SensoryComfortModeScreen } from './screens/SensoryComfortModeScreen';
import { NotificationsControlScreen } from './screens/NotificationsControlScreen';
import { MoodTrackerScreen } from './screens/MoodTrackerScreen';
import { HelpScreen } from './screens/HelpScreen';
import { TipsScreen } from './screens/TipsScreen';
import { EmergencyCalmScreen } from './screens/EmergencyCalmScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { AccessibilitySettingsScreen } from './screens/AccessibilitySettingsScreen';
import { AboutScreen } from './screens/AboutScreen';

// Screens - Calm Features
import { BreathingExercise } from './screens/BreathingExercise';
import { GroundingExercise } from './screens/GroundingExercise';
import { CalmingSounds } from './screens/CalmingSounds';
import { VisualCalm } from './screens/VisualCalm';
import { GuideDetailScreen } from './screens/GuideDetailScreen';

type Screen = 
  // Auth flow
  | 'splash'
  | 'welcome'
  | 'login'
  | 'signup'
  | 'forgot-password'
  | 'profile-setup'
  | 'sensory-setup'
  // Main tabs (post-auth)
  | 'main-home'
  | 'main-calm'
  | 'main-guides'
  | 'main-settings'
  // Calm features
  | 'breathing'
  | 'grounding'
  | 'sounds'
  | 'visual-calm'
  | 'mood-tracker'
  // Guides
  | 'guide-overwhelmed'
  | 'guide-routines'
  | 'guide-triggers'
  | 'guide-support'
  // Legacy/Additional
  | 'home'
  | 'calm-activities'
  | 'focus-mode'
  | 'relaxation-mode'
  | 'quiet-space'
  | 'visual-comfort'
  | 'sound-control'
  | 'sensory-comfort'
  | 'notifications-control'
  | 'help'
  | 'tips'
  | 'emergency'
  | 'settings'
  | 'accessibility'
  | 'about';

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [currentTab, setCurrentTab] = useState<'home' | 'calm' | 'guides' | 'settings'>('home');
  const [history, setHistory] = useState<Screen[]>(['splash']);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // If user logs out, go to welcome
    if (!isAuthenticated && currentScreen !== 'splash' && currentScreen !== 'welcome' && currentScreen !== 'login' && currentScreen !== 'signup' && currentScreen !== 'forgot-password') {
      navigate('welcome');
    }
  }, [isAuthenticated]);

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
    setHistory([...history, screen]);

    // Update current tab for main screens
    if (screen === 'main-home') setCurrentTab('home');
    if (screen === 'main-calm') setCurrentTab('calm');
    if (screen === 'main-guides') setCurrentTab('guides');
    if (screen === 'main-settings') setCurrentTab('settings');
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      const prevScreen = newHistory[newHistory.length - 1];
      setCurrentScreen(prevScreen);
      
      // Update tab
      if (prevScreen === 'main-home') setCurrentTab('home');
      if (prevScreen === 'main-calm') setCurrentTab('calm');
      if (prevScreen === 'main-guides') setCurrentTab('guides');
      if (prevScreen === 'main-settings') setCurrentTab('settings');
    }
  };

  const handleTabChange = (tab: 'home' | 'calm' | 'guides' | 'settings') => {
    setCurrentTab(tab);
    const screenMap = {
      home: 'main-home' as Screen,
      calm: 'main-calm' as Screen,
      guides: 'main-guides' as Screen,
      settings: 'main-settings' as Screen,
    };
    navigate(screenMap[tab]);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      // Auth flow
      case 'splash':
        return <SplashScreen onComplete={() => navigate('welcome')} />;
      
      case 'welcome':
        return (
          <WelcomeScreen
            onGetStarted={() => navigate('signup')}
            onLogin={() => navigate('login')}
          />
        );
      
      case 'login':
        return (
          <LoginScreen
            onBack={goBack}
            onSuccess={() => navigate('main-home')}
            onForgotPassword={() => navigate('forgot-password')}
            onSignUp={() => navigate('signup')}
          />
        );
      
      case 'signup':
        return (
          <SignUpScreen
            onBack={goBack}
            onSuccess={() => navigate('profile-setup')}
          />
        );
      
      case 'forgot-password':
        return <ForgotPasswordScreen onBack={goBack} />;
      
      case 'profile-setup':
        return (
          <UserProfileSetupScreen
            onBack={goBack}
            onNext={() => navigate('sensory-setup')}
          />
        );
      
      case 'sensory-setup':
        return (
          <SensoryPreferenceSetupScreen
            onBack={goBack}
            onComplete={() => navigate('main-home')}
          />
        );

      // Main Navigation Tabs
      case 'main-home':
        return (
          <>
            <MainHomeScreen 
              onNavigateToCalmNow={() => navigate('breathing')}
              onNavigateToMoodTracker={() => navigate('mood-tracker')}
              onNavigateToGrounding={() => navigate('grounding')}
              onNavigateToSounds={() => navigate('sounds')}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );
      
      case 'main-calm':
        return (
          <>
            <MainCalmScreen 
              onSelectFeature={(feature) => {
                if (feature === 'breathing') navigate('breathing');
                if (feature === 'grounding') navigate('grounding');
                if (feature === 'sounds') navigate('sounds');
                if (feature === 'visual') navigate('visual-calm');
              }}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );
      
      case 'main-guides':
        return (
          <>
            <MainGuidesScreen 
              onSelectGuide={(guide) => {
                if (guide === 'overwhelmed') navigate('guide-overwhelmed');
                if (guide === 'routines') navigate('guide-routines');
                if (guide === 'triggers') navigate('guide-triggers');
                if (guide === 'support') navigate('guide-support');
              }}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );
      
      case 'main-settings':
        return (
          <>
            <MainSettingsScreen 
              onNavigate={navigate}
              onBack={() => navigate('main-home')}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );

      // Calm Features
      case 'breathing':
        return (
          <>
            <BreathingExercise 
              onBack={() => navigate('main-calm')}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );
      
      case 'grounding':
        return (
          <>
            <GroundingExercise 
              onBack={() => navigate('main-calm')}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );
      
      case 'sounds':
        return (
          <>
            <CalmingSounds 
              onBack={() => navigate('main-calm')}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );
      
      case 'visual-calm':
        return (
          <>
            <VisualCalm 
              onBack={() => navigate('main-calm')}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );
      
      case 'mood-tracker':
        return (
          <>
            <MoodTrackerScreen onBack={goBack} />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );

      // Guide Details
      case 'guide-overwhelmed':
        return (
          <>
            <GuideDetailScreen
              guideId="overwhelmed"
              onBack={() => navigate('main-guides')}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );
      
      case 'guide-routines':
        return (
          <>
            <GuideDetailScreen
              guideId="routines"
              onBack={() => navigate('main-guides')}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );
      
      case 'guide-triggers':
        return (
          <>
            <GuideDetailScreen
              guideId="triggers"
              onBack={() => navigate('main-guides')}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );
      
      case 'guide-support':
        return (
          <>
            <GuideDetailScreen
              guideId="support"
              onBack={() => navigate('main-guides')}
            />
            {isAuthenticated && (
              <BottomNavigation activeTab={currentTab} onNavigate={handleTabChange} />
            )}
          </>
        );

      // Legacy screens (kept for compatibility)
      case 'home':
        return <HomeScreen onNavigate={navigate} />;
      
      case 'calm-activities':
        return <DailyCalmActivitiesScreen onBack={goBack} />;
      
      case 'focus-mode':
        return <FocusModeScreen onBack={goBack} />;
      
      case 'relaxation-mode':
        return <RelaxationModeScreen onBack={goBack} />;
      
      case 'quiet-space':
        return <QuietSpaceScreen onBack={goBack} />;
      
      case 'visual-comfort':
        return <VisualComfortScreen onBack={goBack} />;
      
      case 'sound-control':
        return <SoundControlScreen onBack={goBack} />;
      
      case 'sensory-comfort':
        return <SensoryComfortModeScreen onBack={goBack} />;
      
      case 'notifications-control':
        return <NotificationsControlScreen onBack={goBack} />;
      
      case 'help':
        return <HelpScreen onBack={goBack} onNavigate={navigate} />;
      
      case 'tips':
        return <TipsScreen onBack={goBack} />;
      
      case 'emergency':
        return <EmergencyCalmScreen onBack={goBack} />;
      
      case 'settings':
        return <SettingsScreen onBack={goBack} onNavigate={navigate} />;
      
      case 'accessibility':
        return <AccessibilitySettingsScreen onBack={goBack} />;
      
      case 'about':
        return <AboutScreen onBack={goBack} />;
      
      default:
        return <WelcomeScreen onGetStarted={() => navigate('signup')} onLogin={() => navigate('login')} />;
    }
  };

  return (
    <div 
      className="min-h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto relative">
          {renderScreen()}
          
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <SensoryProvider>
        <AppContent />
      </SensoryProvider>
    </AuthProvider>
  );
}
