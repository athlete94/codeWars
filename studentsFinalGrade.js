function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) {
      return 100
    }
    else if (exam > 75 && projects > 4) {
      return 90
    }
    else if( exam > 50 && projects > 1) {
      return 75
    }
  }