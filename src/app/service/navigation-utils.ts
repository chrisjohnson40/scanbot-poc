export enum RoutePaths {
  Home = "index.html",
  DocumentScanner = "document-scanner",
  ImageResults = "image-results",
  ImageDetails = "image-details",
  BarcodeScanner = "barcode-scanner",
  BarcodeScannerWithOverlay = "barcode-scanner-with-overlay",
  MrzScanner = "mrz-scanner",
  TextDataScanner = "text-data-scanner",
  Cropping = "cropping",
}

export class NavigationUtils {
  public static getElementByClassName(name: string) {
    return document.getElementsByClassName(name)[0] as HTMLElement;
  }

  public static getElementById(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  public static showBackButton(show: boolean) {
    const backButton = NavigationUtils.getElementById("back-button");
    const toolbarLogo = NavigationUtils.getElementById("toolbar-logo");
    if (backButton) {
      backButton.style.display = show ? "block" : "none";
    }
    if (toolbarLogo) {
      toolbarLogo.style.display = show ? "none" : "block";
    }
  }

  public static showCameraSwapButton(show: boolean) {
    const cameraSwapButton = NavigationUtils.getElementById("camera-swap-button");
    if (cameraSwapButton) {
      cameraSwapButton.style.display = show ? "block" : "none";
    }
  }

  public static showCameraSwitchButton(show: boolean) {
    const cameraSwitchButton = NavigationUtils.getElementById("camera-switch-button");
    if (cameraSwitchButton) {
      cameraSwitchButton.style.display = show ? "block" : "none";
    }
  }

  public static isAtPath(path: RoutePaths) {
    return window.location.href.includes(path);
  }
}
