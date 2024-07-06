using NUnit.Framework;
using System;

[TestFixture]
public class LoginTests
{
    private ILoginService _loginService;

    [SetUp]
    public void Setup()
    {
        // Khởi tạo đối tượng LoginService hoặc mock nếu cần
        _loginService = new LoginService();
    }

    [Test]
    public void Login_WithValidCredentials_ReturnsTrue()
    {
        // Arrange
        string username = "testuser";
        string password = "password123";

        // Act
        bool result = _loginService.Login(username, password);

        // Assert
        Assert.IsTrue(result);
    }

    [Test]
    public void Login_WithInvalidCredentials_ReturnsFalse()
    {
        // Arrange
        string username = "invaliduser";
        string password = "wrongpassword";

        // Act
        bool result = _loginService.Login(username, password);

        // Assert
        Assert.IsFalse(result);
    }

    [Test]
    public void Login_WithEmptyCredentials_ThrowsArgumentException()
    {
        // Arrange
        string username = "";
        string password = "";

        // Act & Assert
        Assert.Throws<ArgumentException>(() => _loginService.Login(username, password));
    }
}