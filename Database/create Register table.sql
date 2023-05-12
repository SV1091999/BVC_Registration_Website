Create database Final_Project_Web

USE [Final_Project_Web]
GO

/****** Object:  Table [dbo].[Register]    Script Date: 2022-11-29 7:36:16 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Register](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Studentid] [varchar](10) NOT NULL,
	[Course] [varchar](max) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


